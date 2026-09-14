---
schema: wang-person/v1
id: p_ByxZLeQEM3c8TBLeF6KvJM
status: active
merged_into: null
display_name: 王繼
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9AWZH2NqDHfdcGqYNRaPUN
        subject_person_id: p_ByxZLeQEM3c8TBLeF6KvJM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NjrhCpPfJsDvh222C2N7tW
          claim_id: c_9AWZH2NqDHfdcGqYNRaPUN
          source_id: s_vzhFyj98EbzW26DLi4CY6U
          stance: supports
          locator: CBDB:126877
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126877）
          source: &a1
            id: s_vzhFyj98EbzW26DLi4CY6U
            source_type: api_record
            title: 中国历代人物传记资料库：王繼（CBDB 126877）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126877&o=json
            external_identifier: CBDB:126877
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.279Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_1xnu6LoijmxBoYjWs2rEWt
        subject_person_id: p_ByxZLeQEM3c8TBLeF6KvJM
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1433年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VLWDoMyJ8EgMPJkMZYoahJ
          claim_id: c_1xnu6LoijmxBoYjWs2rEWt
          source_id: s_vzhFyj98EbzW26DLi4CY6U
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_KypaiuKLKxP5UPGcTwKRJk
        subject_person_id: p_ByxZLeQEM3c8TBLeF6KvJM
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1503年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AvLmGb4wktccFDq1hXVDk5
          claim_id: c_KypaiuKLKxP5UPGcTwKRJk
          source_id: s_vzhFyj98EbzW26DLi4CY6U
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sDsJZZTwj4W6rUbB217Ps6
        subject_person_id: p_ByxZLeQEM3c8TBLeF6KvJM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼（1433年—1503年），明人物。明清進士進士，籍贯祥符，入仕進士。（中国历代人物传记资料库 CBDB 126877）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BsuFK5UVHZOaJShMnE8pqm
          claim_id: c_sDsJZZTwj4W6rUbB217Ps6
          source_id: s_vzhFyj98EbzW26DLi4CY6U
          stance: supports
          locator: CBDB:126877
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Svr-AV74OHykH2yDy1itQ4
        subject_person_id: p_cQ6E9KeRsocen3hrHfKcbk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ByxZLeQEM3c8TBLeF6KvJM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Me0yt6OB5ZllvNdZZCBdXl
          claim_id: c_Svr-AV74OHykH2yDy1itQ4
          source_id: s_vzhFyj98EbzW26DLi4CY6U
          stance: supports
          locator: 成化二年進士登科錄:一卷，第三甲第九十一名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_cQ6E9KeRsocen3hrHfKcbk
        status: active
        display_name: 王廷器
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_ND6rCZ98p-oN-Rj5Du03hw
        subject_person_id: p_ByxZLeQEM3c8TBLeF6KvJM
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_cjiK3o1TfNAoRsoVVh6KnK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gMjUm6ROA3MEJu1jE7Oti3
          claim_id: c_ND6rCZ98p-oN-Rj5Du03hw
          source_id: s_E6-Ue4BT2vhRuOdBmgTNtr
          stance: supports
          locator: 成化二年進士登科錄:一卷，第三甲第九十一名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_E6-Ue4BT2vhRuOdBmgTNtr
            source_type: api_record
            title: 中国历代人物传记资料库：滕氏(王繼妻)（CBDB 237898）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237898&o=json
            external_identifier: CBDB:237898
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_cjiK3o1TfNAoRsoVVh6KnK
        status: active
        display_name: 滕氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_KvqefautQPiS-oBj7LuymA
        subject_person_id: p_CxyZa6TEKBz4MjoJnsZpoy
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ByxZLeQEM3c8TBLeF6KvJM
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2pyiwzcEw3KeyFtg8zdPY8
          claim_id: c_KvqefautQPiS-oBj7LuymA
          source_id: s_vzhFyj98EbzW26DLi4CY6U
          stance: supports
          locator: 成化二年進士登科錄:一卷，第三甲第九十一名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_CxyZa6TEKBz4MjoJnsZpoy
        status: active
        display_name: 王均玉
        merged_into_person_id: null
    - claim:
        id: c_39Cu1S-rZI7GsDdFlLVJbH
        subject_person_id: p_3NRLKquAekXN46Pp8X3ioy
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ByxZLeQEM3c8TBLeF6KvJM
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_C-geNLu5rc9Jkn5bI7r_41
          claim_id: c_39Cu1S-rZI7GsDdFlLVJbH
          source_id: s_vzhFyj98EbzW26DLi4CY6U
          stance: supports
          locator: 成化二年進士登科錄:一卷，第三甲第九十一名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_3NRLKquAekXN46Pp8X3ioy
        status: active
        display_name: 王覺玉
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_RbrmJR1dFBeGmJnVmQsXL8
        subject_person_id: p_2ZhvqH958bmNuvK6AmufHf
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ByxZLeQEM3c8TBLeF6KvJM
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-XWY9MlUJOJBPaGtxiRGt9
          claim_id: c_RbrmJR1dFBeGmJnVmQsXL8
          source_id: s_-0Qy4mgrstz7a08mNZkqfS
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126877 王繼）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_-0Qy4mgrstz7a08mNZkqfS
            source_type: api_record
            title: 中国历代人物传记资料库：王恭（CBDB 237920）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237920&o=json
            external_identifier: CBDB:237920
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2ZhvqH958bmNuvK6AmufHf
        status: active
        display_name: 王恭
        merged_into_person_id: null
    - claim:
        id: c_EEZU0oHBHWmApIpYlNXcGP
        subject_person_id: p_89Gv5LxJm8nf3nvnSY46kb
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ByxZLeQEM3c8TBLeF6KvJM
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bk3vT3wV65r5_iluXir3GI
          claim_id: c_EEZU0oHBHWmApIpYlNXcGP
          source_id: s_rI3AhPmX2Vyaxdu_FvoVNo
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126877 王繼）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_rI3AhPmX2Vyaxdu_FvoVNo
            source_type: api_record
            title: 中国历代人物传记资料库：王綜（CBDB 237909）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237909&o=json
            external_identifier: CBDB:237909
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_89Gv5LxJm8nf3nvnSY46kb
        status: active
        display_name: 王綜
        merged_into_person_id: null
    - claim:
        id: c_FEfo_HFVP8uY8DXTOWhAIc
        subject_person_id: p_ByxZLeQEM3c8TBLeF6KvJM
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_HJcQ8d3dQ1XcCbBCD2vNJu
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QcoH7abBfp5b4x1soDNJ3e
          claim_id: c_FEfo_HFVP8uY8DXTOWhAIc
          source_id: s_W9tYzWOrvQuWF_39mcgmNz
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126877 王繼）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_W9tYzWOrvQuWF_39mcgmNz
            source_type: api_record
            title: 中国历代人物传记资料库：王寬（CBDB 237931）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237931&o=json
            external_identifier: CBDB:237931
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HJcQ8d3dQ1XcCbBCD2vNJu
        status: active
        display_name: 王寬
        merged_into_person_id: null
    - claim:
        id: c_3AudHfoIZPjFQCn7u_-OOY
        subject_person_id: p_ByxZLeQEM3c8TBLeF6KvJM
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_NPuD48ACECXDKgZJ8tKWBt
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rKdnVKDuE2AMoWP87Evv4G
          claim_id: c_3AudHfoIZPjFQCn7u_-OOY
          source_id: s_A6TTemiiyX_u-oO9Mm35Kv
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126877 王繼）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_A6TTemiiyX_u-oO9Mm35Kv
            source_type: api_record
            title: 中国历代人物传记资料库：王敏（CBDB 237942）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237942&o=json
            external_identifier: CBDB:237942
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NPuD48ACECXDKgZJ8tKWBt
        status: active
        display_name: 王敏
        merged_into_person_id: null
---

# 王繼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王繼 | accepted |
| birth.date | 1433年 | accepted |
| death.date | 1503年 | accepted |
| bio.summary | 王繼（1433年—1503年），明人物。明清進士進士，籍贯祥符，入仕進士。（中国历代人物传记资料库 CBDB 126877） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_cQ6E9KeRsocen3hrHfKcbk | 王廷器 | accepted |
| spouses | p_cjiK3o1TfNAoRsoVVh6KnK | 滕氏 | accepted |
| ancestors | p_CxyZa6TEKBz4MjoJnsZpoy | 王均玉 | accepted |
| ancestors | p_3NRLKquAekXN46Pp8X3ioy | 王覺玉 | accepted |
| other | p_2ZhvqH958bmNuvK6AmufHf | 王恭 | accepted |
| other | p_89Gv5LxJm8nf3nvnSY46kb | 王綜 | accepted |
| other | p_HJcQ8d3dQ1XcCbBCD2vNJu | 王寬 | accepted |
| other | p_NPuD48ACECXDKgZJ8tKWBt | 王敏 | accepted |

## 外部来源

- [中国历代人物传记资料库：滕氏(王繼妻)（CBDB 237898）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237898&o=json)
- [中国历代人物传记资料库：王恭（CBDB 237920）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237920&o=json)
- [中国历代人物传记资料库：王繼（CBDB 126877）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126877&o=json)
- [中国历代人物传记资料库：王寬（CBDB 237931）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237931&o=json)
- [中国历代人物传记资料库：王敏（CBDB 237942）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237942&o=json)
- [中国历代人物传记资料库：王綜（CBDB 237909）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237909&o=json)

---
schema: wang-person/v1
id: p_RRZuE21H2Z9728UGo3kUPT
status: active
merged_into: null
display_name: 王邦俊
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Vf8mtQZx6k2bAMgZLkzP24
        subject_person_id: p_RRZuE21H2Z9728UGo3kUPT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王邦俊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NbA252BCP3a5kMACEM5kpv
          claim_id: c_Vf8mtQZx6k2bAMgZLkzP24
          source_id: s_2Kf76qGjwb83JiY3ndEfR1
          stance: supports
          locator: CBDB:206190
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（206190）
          source: &a1
            id: s_2Kf76qGjwb83JiY3ndEfR1
            source_type: api_record
            title: 中国历代人物传记资料库：王邦俊（CBDB 206190）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206190&o=json
            external_identifier: CBDB:206190
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.888Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_VfKW8HSSQNPHFCW1nRPVhV
        subject_person_id: p_RRZuE21H2Z9728UGo3kUPT
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1548年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gJpMFYqdx9v5B11egUWjj5
          claim_id: c_VfKW8HSSQNPHFCW1nRPVhV
          source_id: s_2Kf76qGjwb83JiY3ndEfR1
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qSPoPPAa5DdBp8F7HCye8T
        subject_person_id: p_RRZuE21H2Z9728UGo3kUPT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王邦俊（生于1548年），明人物。明清進士進士，籍贯鄜州，入仕進士。（中国历代人物传记资料库 CBDB 206190）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jNO5z7K2VPQXiHREqra841
          claim_id: c_qSPoPPAa5DdBp8F7HCye8T
          source_id: s_2Kf76qGjwb83JiY3ndEfR1
          stance: supports
          locator: CBDB:206190
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ko2ZDv8EvnKExXLwp7Rnsr
        subject_person_id: p_p52NPJ3XEL4EMz8XmEty7C
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RRZuE21H2Z9728UGo3kUPT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6y_a_lisH3tkyWQqjzEjXh
          claim_id: c_ko2ZDv8EvnKExXLwp7Rnsr
          source_id: s_QfxaMSXNDnsAA16j7kZEA5
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第一百四十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_QfxaMSXNDnsAA16j7kZEA5
            source_type: api_record
            title: 中国历代人物传记资料库：王瀾（CBDB 214607）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214607&o=json
            external_identifier: CBDB:214607
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.161Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_p52NPJ3XEL4EMz8XmEty7C
        status: active
        display_name: 王瀾
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_sdQFZwDoMOYXEKhx5Br8Hn
        subject_person_id: p_jmJNUw1ejhwr4vyXkCpjV3
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_RRZuE21H2Z9728UGo3kUPT
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ii1FE06eXM2vcXaA8yCKdk
          claim_id: c_sdQFZwDoMOYXEKhx5Br8Hn
          source_id: s_t9rS7hD3BCio9H9y5Aaysk
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第一百四十一名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_t9rS7hD3BCio9H9y5Aaysk
            source_type: api_record
            title: 中国历代人物传记资料库：王鳳儀（CBDB 214606）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214606&o=json
            external_identifier: CBDB:214606
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.160Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_jmJNUw1ejhwr4vyXkCpjV3
        status: active
        display_name: 王鳳儀
        merged_into_person_id: null
    - claim:
        id: c_QtnXU0Lj0TcD0hoGQEx1HN
        subject_person_id: p_oEjk9MMP49z4GcDFBCjNtL
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_RRZuE21H2Z9728UGo3kUPT
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lZMSUFVCEllRnOtj8rgYnP
          claim_id: c_QtnXU0Lj0TcD0hoGQEx1HN
          source_id: s_eF47dAHdzoGoyGD1iroBjF
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第一百四十一名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_eF47dAHdzoGoyGD1iroBjF
            source_type: api_record
            title: 中国历代人物传记资料库：王恕（CBDB 214605）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214605&o=json
            external_identifier: CBDB:214605
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.159Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_oEjk9MMP49z4GcDFBCjNtL
        status: active
        display_name: 王恕
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_JxZ2MZ3SvrCQHMkKDXpAMZ
        subject_person_id: p_FqhZ4oxaHvpQE9TXe9sD9L
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_RRZuE21H2Z9728UGo3kUPT
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_s_Egvo-Ug7QiMy5K8PH7oH
          claim_id: c_JxZ2MZ3SvrCQHMkKDXpAMZ
          source_id: s_PgDmBrnh47gQ3kQu2NW13H
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206190 王邦俊）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_PgDmBrnh47gQ3kQu2NW13H
            source_type: api_record
            title: 中国历代人物传记资料库：王邦秀（CBDB 214610）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214610&o=json
            external_identifier: CBDB:214610
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FqhZ4oxaHvpQE9TXe9sD9L
        status: active
        display_name: 王邦秀
        merged_into_person_id: null
---

# 王邦俊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王邦俊 | accepted |
| birth.date | 1548年 | accepted |
| bio.summary | 王邦俊（生于1548年），明人物。明清進士進士，籍贯鄜州，入仕進士。（中国历代人物传记资料库 CBDB 206190） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_p52NPJ3XEL4EMz8XmEty7C | 王瀾 | accepted |
| ancestors | p_jmJNUw1ejhwr4vyXkCpjV3 | 王鳳儀 | accepted |
| ancestors | p_oEjk9MMP49z4GcDFBCjNtL | 王恕 | accepted |
| other | p_FqhZ4oxaHvpQE9TXe9sD9L | 王邦秀 | accepted |

## 外部来源

- [中国历代人物传记资料库：王邦俊（CBDB 206190）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206190&o=json)
- [中国历代人物传记资料库：王邦秀（CBDB 214610）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214610&o=json)
- [中国历代人物传记资料库：王鳳儀（CBDB 214606）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214606&o=json)
- [中国历代人物传记资料库：王瀾（CBDB 214607）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214607&o=json)
- [中国历代人物传记资料库：王恕（CBDB 214605）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214605&o=json)

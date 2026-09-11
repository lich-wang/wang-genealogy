---
schema: wang-person/v1
id: p_WF551B42q65ujmx95gTJGt
status: active
merged_into: null
display_name: 王綖
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2uPyRoggx5dDzqhQGCvLTW
        subject_person_id: p_WF551B42q65ujmx95gTJGt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yjn2LtjadRtaXpqT8oN6Wz
          claim_id: c_2uPyRoggx5dDzqhQGCvLTW
          source_id: s_VL81k4JwhPzHToHQ5Z6tGh
          stance: supports
          locator: CBDB:126771
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126771）
          source: &a1
            id: s_VL81k4JwhPzHToHQ5Z6tGh
            source_type: api_record
            title: 中国历代人物传记资料库：王綖（CBDB 126771）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126771&o=json
            external_identifier: CBDB:126771
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.191Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_noymSXBCDrcRUxxyCL2fK8
        subject_person_id: p_WF551B42q65ujmx95gTJGt
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1477年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ms3o9aqu1WgK1Lv1Y9WK45
          claim_id: c_noymSXBCDrcRUxxyCL2fK8
          source_id: s_VL81k4JwhPzHToHQ5Z6tGh
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
        id: c_3Dg8E9XvDdoP3oKbAPNbvA
        subject_person_id: p_WF551B42q65ujmx95gTJGt
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1537年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rAn8LC31onYCp2m8T1NHqd
          claim_id: c_3Dg8E9XvDdoP3oKbAPNbvA
          source_id: s_VL81k4JwhPzHToHQ5Z6tGh
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
        id: c_RPPVQiRhEEbWg944yxkTDi
        subject_person_id: p_WF551B42q65ujmx95gTJGt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綖（1477年—1537年），明人物。明清進士進士，籍贯開州，入仕進士。（中国历代人物传记资料库 CBDB 126771）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FeTXbMrVWnukk_fM_YYcpq
          claim_id: c_RPPVQiRhEEbWg944yxkTDi
          source_id: s_VL81k4JwhPzHToHQ5Z6tGh
          stance: supports
          locator: CBDB:126771
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_B7y3WJ1rkYeFsh1ye0I2-X
        subject_person_id: p_mCtAQA38FjMf51Dp9sA6Hp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WF551B42q65ujmx95gTJGt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HOXscXbmO_5MJftAu3zXBy
          claim_id: c_B7y3WJ1rkYeFsh1ye0I2-X
          source_id: s_kXTY2YMdc649engu3sT2ZU
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第二甲第十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_kXTY2YMdc649engu3sT2ZU
            source_type: api_record
            title: 中国历代人物传记资料库：王溥（CBDB 272832）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272832&o=json
            external_identifier: CBDB:272832
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.894Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_mCtAQA38FjMf51Dp9sA6Hp
        status: active
        display_name: 王溥
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_mSOZcg3QbsGpyAsbmWGeib
        subject_person_id: p_4645iYbkHLJUi3dawpW4di
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_WF551B42q65ujmx95gTJGt
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9yCRMtHyDU3x2bOQs7svjp
          claim_id: c_mSOZcg3QbsGpyAsbmWGeib
          source_id: s_1LyCf7jNLC7S7J7X2aUjtf
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第二甲第十一名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_1LyCf7jNLC7S7J7X2aUjtf
            source_type: api_record
            title: 中国历代人物传记资料库：王福榮（CBDB 272830）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272830&o=json
            external_identifier: CBDB:272830
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.893Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4645iYbkHLJUi3dawpW4di
        status: active
        display_name: 王福榮
        merged_into_person_id: null
    - claim:
        id: c_cCoHWVg6otc4naNeIT6LyY
        subject_person_id: p_RCPYt29wJNBVHLBjSXqQWe
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_WF551B42q65ujmx95gTJGt
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__feYknd9qAcD8wZewpV9go
          claim_id: c_cCoHWVg6otc4naNeIT6LyY
          source_id: s_X4tsEkaPh9rAC2QzUXjUG8
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第二甲第十一名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_X4tsEkaPh9rAC2QzUXjUG8
            source_type: api_record
            title: 中国历代人物传记资料库：王貴（CBDB 272831）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272831&o=json
            external_identifier: CBDB:272831
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.893Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_RCPYt29wJNBVHLBjSXqQWe
        status: active
        display_name: 王貴
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王綖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王綖 | accepted |
| birth.date | 1477年 | accepted |
| death.date | 1537年 | accepted |
| bio.summary | 王綖（1477年—1537年），明人物。明清進士進士，籍贯開州，入仕進士。（中国历代人物传记资料库 CBDB 126771） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_mCtAQA38FjMf51Dp9sA6Hp | 王溥 | accepted |
| ancestors | p_4645iYbkHLJUi3dawpW4di | 王福榮 | accepted |
| ancestors | p_RCPYt29wJNBVHLBjSXqQWe | 王貴 | accepted |

## 外部来源

- [中国历代人物传记资料库：王福榮（CBDB 272830）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272830&o=json)
- [中国历代人物传记资料库：王貴（CBDB 272831）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272831&o=json)
- [中国历代人物传记资料库：王溥（CBDB 272832）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272832&o=json)
- [中国历代人物传记资料库：王綖（CBDB 126771）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126771&o=json)

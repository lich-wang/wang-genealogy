---
schema: wang-person/v1
id: p_SYXFGxrvTKuqf2KJyrt996
status: active
merged_into: null
display_name: 王桓
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_P1TM3iGtDNNP1cLU6AGXHr
        subject_person_id: p_SYXFGxrvTKuqf2KJyrt996
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王桓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ME3Wde29M7w4e5PCdJ5DWS
          claim_id: c_P1TM3iGtDNNP1cLU6AGXHr
          source_id: s_3uBsQQHN5ELUcBZ6ZATkDS
          stance: supports
          locator: CBDB:28788
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（28788）
          source: &a1
            id: s_3uBsQQHN5ELUcBZ6ZATkDS
            source_type: api_record
            title: 中国历代人物传记资料库：王桓（CBDB 28788）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28788&o=json
            external_identifier: CBDB:28788
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.982Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZBSWEoahH1NZbMneqEqAv5
        subject_person_id: p_SYXFGxrvTKuqf2KJyrt996
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王桓，元人物。籍贯須城。（中国历代人物传记资料库 CBDB 28788）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yA8k5LWNDleBgGt3tjRTys
          claim_id: c_ZBSWEoahH1NZbMneqEqAv5
          source_id: s_3uBsQQHN5ELUcBZ6ZATkDS
          stance: supports
          locator: CBDB:28788
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_K5X2rlDZwYTM3-Vq1056ca
        subject_person_id: p_7azhxqix4L7NzFdHMRSmU1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_SYXFGxrvTKuqf2KJyrt996
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tBzbyPOV9nmPsB4xhiwHBu
          claim_id: c_K5X2rlDZwYTM3-Vq1056ca
          source_id: s_HwAXIB7gTuU6FMepco0rRN
          stance: supports
          locator: CBDB 亲属：父（KinPerson 28786）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_HwAXIB7gTuU6FMepco0rRN
            source_type: api_record
            title: 中国历代人物传记资料库：王桓（CBDB 28788）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28788&o=json
            external_identifier: CBDB:28788
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7azhxqix4L7NzFdHMRSmU1
        status: active
        display_name: 王公淵
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王桓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王桓 | accepted |
| bio.summary | 王桓，元人物。籍贯須城。（中国历代人物传记资料库 CBDB 28788） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_7azhxqix4L7NzFdHMRSmU1 | 王公淵 | accepted |

## 外部来源

- [中国历代人物传记资料库：王桓（CBDB 28788）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28788&o=json)

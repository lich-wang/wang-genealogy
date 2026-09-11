---
schema: wang-person/v1
id: p_uKE1GZcJjjWN4cHRBMP9aK
status: active
merged_into: null
display_name: 王璿
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Eqa86mgKkzTTR5CCCqPeEG
        subject_person_id: p_uKE1GZcJjjWN4cHRBMP9aK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DYX4hhXB7gNGBbfhw8yzRZ
          claim_id: c_Eqa86mgKkzTTR5CCCqPeEG
          source_id: s_Yn8KP1n61f6yGwukEqwKKr
          stance: supports
          locator: CBDB:266711
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（266711）
          source: &a1
            id: s_Yn8KP1n61f6yGwukEqwKKr
            source_type: api_record
            title: 中国历代人物传记资料库：王璿（CBDB 266711）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266711&o=json
            external_identifier: CBDB:266711
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.726Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LuLYKbASwMVHBYtrqEft8o
        subject_person_id: p_uKE1GZcJjjWN4cHRBMP9aK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璿，明人物。弘治六年進士，籍贯中牟，曾任兵部主事、義官。（中国历代人物传记资料库 CBDB 266711）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_oTuD1xo_JRnr9NrGo8DGrQ
          claim_id: c_LuLYKbASwMVHBYtrqEft8o
          source_id: s_Yn8KP1n61f6yGwukEqwKKr
          stance: supports
          locator: CBDB:266711
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_e5jrA5Nhmi3Juazf3lvV0R
        subject_person_id: p_uKE1GZcJjjWN4cHRBMP9aK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tHYCzriS6LnJ4HHGiVfcHQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2z9izPYn7qcp5ylTylnYQC
          claim_id: c_e5jrA5Nhmi3Juazf3lvV0R
          source_id: s_Yn8KP1n61f6yGwukEqwKKr
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第二百零二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_tHYCzriS6LnJ4HHGiVfcHQ
        status: active
        display_name: 王汝清
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_PQlT2TlW9P5JV_m7gvy5JZ
        subject_person_id: p_uKE1GZcJjjWN4cHRBMP9aK
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_FbvUfnrJsMZAACE7dBpnUs
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dbb4cGip20tOPjzAhlZd4V
          claim_id: c_PQlT2TlW9P5JV_m7gvy5JZ
          source_id: s_Ee5YLNRT2rhjRFBBFroTte
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第七十八名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Ee5YLNRT2rhjRFBBFroTte
            source_type: api_record
            title: 中国历代人物传记资料库：王胤賢（CBDB 201978）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201978&o=json
            external_identifier: CBDB:201978
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.707Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_FbvUfnrJsMZAACE7dBpnUs
        status: active
        display_name: 王胤賢
        merged_into_person_id: null
  other: []
---

# 王璿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璿 | accepted |
| bio.summary | 王璿，明人物。弘治六年進士，籍贯中牟，曾任兵部主事、義官。（中国历代人物传记资料库 CBDB 266711） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_tHYCzriS6LnJ4HHGiVfcHQ | 王汝清 | accepted |
| descendants | p_FbvUfnrJsMZAACE7dBpnUs | 王胤賢 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璿（CBDB 266711）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266711&o=json)
- [中国历代人物传记资料库：王胤賢（CBDB 201978）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201978&o=json)

---
schema: wang-person/v1
id: p_o8zvgJXd9bgohC9oUj28Xv
status: active
merged_into: null
display_name: 王敏
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MSW974bCWi6apKwNgUeWGQ
        subject_person_id: p_o8zvgJXd9bgohC9oUj28Xv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kT3paroYG7y3V6XeNR1t31
          claim_id: c_MSW974bCWi6apKwNgUeWGQ
          source_id: s_mJewe5Eq6z5cYs7W63UDLK
          stance: supports
          locator: CBDB:259206
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（259206）
          source: &a1
            id: s_mJewe5Eq6z5cYs7W63UDLK
            source_type: api_record
            title: 中国历代人物传记资料库：王敏（CBDB 259206）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259206&o=json
            external_identifier: CBDB:259206
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.447Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AjvRJsW3vntnQmufM3L7Uv
        subject_person_id: p_o8zvgJXd9bgohC9oUj28Xv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敏，明人物。成化二十三年進士，籍贯餘姚。（中国历代人物传记资料库 CBDB 259206）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qjNL2OC5hPSvsl3RBiLNtR
          claim_id: c_AjvRJsW3vntnQmufM3L7Uv
          source_id: s_mJewe5Eq6z5cYs7W63UDLK
          stance: supports
          locator: CBDB:259206
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_rchdbHQ9KbvBye89WAOg_R
        subject_person_id: p_o8zvgJXd9bgohC9oUj28Xv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8kdsz31LsNcXBMccuK9UD2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_E6Xybh93MzzAVSCSF8JHxX
          claim_id: c_rchdbHQ9KbvBye89WAOg_R
          source_id: s_rinjSKxkPZ6GXhj8MmBj5D
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第六十二名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_rinjSKxkPZ6GXhj8MmBj5D
            source_type: api_record
            title: 中国历代人物传记资料库：王恩（CBDB 200520）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200520&o=json
            external_identifier: CBDB:200520
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.616Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8kdsz31LsNcXBMccuK9UD2
        status: active
        display_name: 王恩
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王敏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敏 | accepted |
| bio.summary | 王敏，明人物。成化二十三年進士，籍贯餘姚。（中国历代人物传记资料库 CBDB 259206） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_8kdsz31LsNcXBMccuK9UD2 | 王恩 | accepted |

## 外部来源

- [中国历代人物传记资料库：王恩（CBDB 200520）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200520&o=json)
- [中国历代人物传记资料库：王敏（CBDB 259206）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259206&o=json)

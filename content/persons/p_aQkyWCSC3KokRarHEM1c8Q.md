---
schema: wang-person/v1
id: p_aQkyWCSC3KokRarHEM1c8Q
status: active
merged_into: null
display_name: 王聰
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_w3i7NhVLwFsNWW3Q6f2qMa
        subject_person_id: p_aQkyWCSC3KokRarHEM1c8Q
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王聰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_97DtnkVwKoVhSHcFpAEJZG
          claim_id: c_w3i7NhVLwFsNWW3Q6f2qMa
          source_id: s_L7TuBtQ6aWwZDZBFWbSwFB
          stance: supports
          locator: CBDB:227950
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（227950）
          source: &a1
            id: s_L7TuBtQ6aWwZDZBFWbSwFB
            source_type: api_record
            title: 中国历代人物传记资料库：王聰（CBDB 227950）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227950&o=json
            external_identifier: CBDB:227950
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.536Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_i9hYvM6PSV722cBtixM1SZ
        subject_person_id: p_aQkyWCSC3KokRarHEM1c8Q
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王聰，明人物。成化二年進士，籍贯海鹽。（中国历代人物传记资料库 CBDB 227950）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_C7zJajKwu2_qnRXrhp0sS1
          claim_id: c_i9hYvM6PSV722cBtixM1SZ
          source_id: s_L7TuBtQ6aWwZDZBFWbSwFB
          stance: supports
          locator: CBDB:227950
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_CO-Ph_HAuUEdA81_Vz0J5R
        subject_person_id: p_aQkyWCSC3KokRarHEM1c8Q
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gYCzF6vom9uRciu3ySukCo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XUaoQes4kzMbN2lXHbS9V3
          claim_id: c_CO-Ph_HAuUEdA81_Vz0J5R
          source_id: s_L7TuBtQ6aWwZDZBFWbSwFB
          stance: supports
          locator: 成化二年進士登科錄:一卷，第二甲第九十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_gYCzF6vom9uRciu3ySukCo
        status: active
        display_name: 王輔
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王聰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王聰 | accepted |
| bio.summary | 王聰，明人物。成化二年進士，籍贯海鹽。（中国历代人物传记资料库 CBDB 227950） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_gYCzF6vom9uRciu3ySukCo | 王輔 | accepted |

## 外部来源

- [中国历代人物传记资料库：王聰（CBDB 227950）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227950&o=json)

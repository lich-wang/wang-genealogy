---
schema: wang-person/v1
id: p_vm3pjaHTSDQ6VkzaEmZzF9
status: active
merged_into: null
display_name: 王以寧
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Bq2a2ariuTAkvhy9b3qg1s
        subject_person_id: p_vm3pjaHTSDQ6VkzaEmZzF9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王以寧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Ann6GQcDSA62norWA9e8oK
          claim_id: c_Bq2a2ariuTAkvhy9b3qg1s
          source_id: s_DMo3hVRfqy9xvE8ZcZLNXb
          stance: supports
          locator: CBDB:342436
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342436）
          source: &a1
            id: s_DMo3hVRfqy9xvE8ZcZLNXb
            source_type: api_record
            title: 中国历代人物传记资料库：王以寧（CBDB 342436）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342436&o=json
            external_identifier: CBDB:342436
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.932Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Ghe92wo3751ymgat9BJWKp
        subject_person_id: p_vm3pjaHTSDQ6VkzaEmZzF9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王以寧，明人物。明清進士進士，籍贯會稽，入仕進士，曾任督學政、巡按御史、知縣。（中国历代人物传记资料库 CBDB 342436）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PvlcZeWMwC6bGLDsahEtiC
          claim_id: c_Ghe92wo3751ymgat9BJWKp
          source_id: s_DMo3hVRfqy9xvE8ZcZLNXb
          stance: supports
          locator: CBDB:342436
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_MHbiMr_Mwmdk5knEojdRgP
        subject_person_id: p_vm3pjaHTSDQ6VkzaEmZzF9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hFvKjcZzAHBT5yPLcNPrer
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SqfJ7eOLHjxMxkJ-AbAHpb
          claim_id: c_MHbiMr_Mwmdk5knEojdRgP
          source_id: s_VZG21ML9jSUQfaey7co6Fh
          stance: supports
          locator: 紹興府志:八十卷，Igid=316225：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_VZG21ML9jSUQfaey7co6Fh
            source_type: api_record
            title: 中国历代人物传记资料库：王兆修（CBDB 556142）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556142&o=json
            external_identifier: CBDB:556142
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.525Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_hFvKjcZzAHBT5yPLcNPrer
        status: active
        display_name: 王兆修
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王以寧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王以寧 | accepted |
| bio.summary | 王以寧，明人物。明清進士進士，籍贯會稽，入仕進士，曾任督學政、巡按御史、知縣。（中国历代人物传记资料库 CBDB 342436） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_hFvKjcZzAHBT5yPLcNPrer | 王兆修 | accepted |

## 外部来源

- [中国历代人物传记资料库：王以寧（CBDB 342436）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342436&o=json)
- [中国历代人物传记资料库：王兆修（CBDB 556142）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556142&o=json)

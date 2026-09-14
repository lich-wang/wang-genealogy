---
schema: wang-person/v1
id: p_LzCu3N2C5U3pdrCETHd45i
status: active
merged_into: null
display_name: 王璋
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Jp22L5PEkt97Pf1GmYuVXo
        subject_person_id: p_LzCu3N2C5U3pdrCETHd45i
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5k8d52LCxmEJznc3hFz573
          claim_id: c_Jp22L5PEkt97Pf1GmYuVXo
          source_id: s_qp1jhXrTfQ43awk9TtMywL
          stance: supports
          locator: CBDB:266075
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（266075）
          source: &a1
            id: s_qp1jhXrTfQ43awk9TtMywL
            source_type: api_record
            title: 中国历代人物传记资料库：王璋（CBDB 266075）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266075&o=json
            external_identifier: CBDB:266075
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.710Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZRpC22fkh95qzwJ5xMNmFx
        subject_person_id: p_LzCu3N2C5U3pdrCETHd45i
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璋，明人物。弘治六年進士，籍贯陳州。（中国历代人物传记资料库 CBDB 266075）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KhaTY7aDek_c6BTKB8SeAd
          claim_id: c_ZRpC22fkh95qzwJ5xMNmFx
          source_id: s_qp1jhXrTfQ43awk9TtMywL
          stance: supports
          locator: CBDB:266075
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_ycIrIteIqLesXDwOdjIXf6
        subject_person_id: p_LzCu3N2C5U3pdrCETHd45i
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_i98FVCHxFpmHEPq1xWByi6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zAV4tS12RNGtf29xCYczBX
          claim_id: c_ycIrIteIqLesXDwOdjIXf6
          source_id: s_fB4hQ2GqSMVbEJrJj9XLEB
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第一百三十七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_fB4hQ2GqSMVbEJrJj9XLEB
            source_type: api_record
            title: 中国历代人物传记资料库：王良臣（CBDB 126528）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126528&o=json
            external_identifier: CBDB:126528
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.001Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_i98FVCHxFpmHEPq1xWByi6
        status: active
        display_name: 王良臣
        merged_into_person_id: null
    - claim:
        id: c_PgEQkNxEpQwMEWtQuQD4Tc
        subject_person_id: p_LzCu3N2C5U3pdrCETHd45i
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_T5ptgLrt8SqYBBPnTSAV6v
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zDTThc4zTzpuajSxBNIc6p
          claim_id: c_PgEQkNxEpQwMEWtQuQD4Tc
          source_id: s_cYl7WOQao7MXAPnyI3dcZI
          stance: supports
          locator: CBDB：兄弟 王良臣（126528）之父／母 王璋
          quotation: null
          interpretation_note: 由兄弟关系推断：王良相 与 王良臣 为同胞（CBDB 记「兄」），王良臣 之父／母即 王良相 之父／母。
          source:
            id: s_cYl7WOQao7MXAPnyI3dcZI
            source_type: api_record
            title: 中国历代人物传记资料库：王良相（CBDB 266080）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266080&o=json
            external_identifier: CBDB:266080
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_T5ptgLrt8SqYBBPnTSAV6v
        status: active
        display_name: 王良相
        merged_into_person_id: null
    - claim:
        id: c_vzWhRzIYf5wBNlJOImOXvT
        subject_person_id: p_LzCu3N2C5U3pdrCETHd45i
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_d36qpG18a3Kz5yfkz93Zh9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Xq5hGHRGLuyksBFCREmUYD
          claim_id: c_vzWhRzIYf5wBNlJOImOXvT
          source_id: s_dzd1oAigpz11HEbita4cPf
          stance: supports
          locator: CBDB：兄弟 王良臣（126528）之父／母 王璋
          quotation: null
          interpretation_note: 由兄弟关系推断：王良士 与 王良臣 为同胞（CBDB 记「兄」），王良臣 之父／母即 王良士 之父／母。
          source:
            id: s_dzd1oAigpz11HEbita4cPf
            source_type: api_record
            title: 中国历代人物传记资料库：王良士（CBDB 266084）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266084&o=json
            external_identifier: CBDB:266084
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_d36qpG18a3Kz5yfkz93Zh9
        status: active
        display_name: 王良士
        merged_into_person_id: null
    - claim:
        id: c_U9EFH-LSxuo2ZNedbPI7rg
        subject_person_id: p_LzCu3N2C5U3pdrCETHd45i
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jinjX5ADk6G5VsaJoLLwuf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aeEpcMuBWMObh0kImKU50F
          claim_id: c_U9EFH-LSxuo2ZNedbPI7rg
          source_id: s_QyNtJStvTDg-C-qEySyT3i
          stance: supports
          locator: CBDB：兄弟 王良臣（126528）之父／母 王璋
          quotation: null
          interpretation_note: 由兄弟关系推断：王良弼 与 王良臣 为同胞（CBDB 记「兄」），王良臣 之父／母即 王良弼 之父／母。
          source:
            id: s_QyNtJStvTDg-C-qEySyT3i
            source_type: api_record
            title: 中国历代人物传记资料库：王良弼（CBDB 266081）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266081&o=json
            external_identifier: CBDB:266081
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_jinjX5ADk6G5VsaJoLLwuf
        status: active
        display_name: 王良弼
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王璋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璋 | accepted |
| bio.summary | 王璋，明人物。弘治六年進士，籍贯陳州。（中国历代人物传记资料库 CBDB 266075） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_i98FVCHxFpmHEPq1xWByi6 | 王良臣 | accepted |
| children | p_T5ptgLrt8SqYBBPnTSAV6v | 王良相 | accepted |
| children | p_d36qpG18a3Kz5yfkz93Zh9 | 王良士 | accepted |
| children | p_jinjX5ADk6G5VsaJoLLwuf | 王良弼 | accepted |

## 外部来源

- [中国历代人物传记资料库：王良弼（CBDB 266081）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266081&o=json)
- [中国历代人物传记资料库：王良臣（CBDB 126528）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126528&o=json)
- [中国历代人物传记资料库：王良士（CBDB 266084）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266084&o=json)
- [中国历代人物传记资料库：王良相（CBDB 266080）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266080&o=json)
- [中国历代人物传记资料库：王璋（CBDB 266075）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266075&o=json)

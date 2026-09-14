---
schema: wang-person/v1
id: p_2XQ9edNzTjVFAjV2kU7q1C
status: active
merged_into: null
display_name: 王舉
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_E7MNL678afEuichrbQiJ3F
        subject_person_id: p_2XQ9edNzTjVFAjV2kU7q1C
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王舉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XGEnA2JcizZVbV7s43aka6
          claim_id: c_E7MNL678afEuichrbQiJ3F
          source_id: s_6KsjoUrKe3vBmFZZYrKKnw
          stance: supports
          locator: CBDB:262289
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（262289）
          source: &a1
            id: s_6KsjoUrKe3vBmFZZYrKKnw
            source_type: api_record
            title: 中国历代人物传记资料库：王舉（CBDB 262289）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262289&o=json
            external_identifier: CBDB:262289
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.581Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZRUGPRaDLtQteUXt5468cG
        subject_person_id: p_2XQ9edNzTjVFAjV2kU7q1C
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王舉，明人物。弘治三年進士，籍贯蠡縣，入仕監生。（中国历代人物传记资料库 CBDB 262289）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3rML0bp5zhxUTTKU0teHrD
          claim_id: c_ZRUGPRaDLtQteUXt5468cG
          source_id: s_6KsjoUrKe3vBmFZZYrKKnw
          stance: supports
          locator: CBDB:262289
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_F8B4fTN71ENmMfJcPpJDVF
        subject_person_id: p_2XQ9edNzTjVFAjV2kU7q1C
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_z8mgWQExeo9ps9NYQ1o1hg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JHhp3YV23zrIfBMsh_mLDu
          claim_id: c_F8B4fTN71ENmMfJcPpJDVF
          source_id: s_6KsjoUrKe3vBmFZZYrKKnw
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第四十八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_z8mgWQExeo9ps9NYQ1o1hg
        status: active
        display_name: 王凱
        merged_into_person_id: null
    - claim:
        id: c_9bSTeeHbnKL34VgwULMpOc
        subject_person_id: p_2XQ9edNzTjVFAjV2kU7q1C
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JmRrnSkxhs34xmMBgfdfLA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pX2BMQqih7omeWQvPSo4Fj
          claim_id: c_9bSTeeHbnKL34VgwULMpOc
          source_id: s_WD0DJgvgL_PV-Orij0Q8cx
          stance: supports
          locator: CBDB：兄弟 王凱（200743）之父／母 王舉
          quotation: null
          interpretation_note: 由兄弟关系推断：王定 与 王凱 为同胞（CBDB 记「兄」），王凱 之父／母即 王定 之父／母。
          source:
            id: s_WD0DJgvgL_PV-Orij0Q8cx
            source_type: api_record
            title: 中国历代人物传记资料库：王定（CBDB 262295）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262295&o=json
            external_identifier: CBDB:262295
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_JmRrnSkxhs34xmMBgfdfLA
        status: active
        display_name: 王定
        merged_into_person_id: null
    - claim:
        id: c_S7tGd6m0pYW4n29liGIxy5
        subject_person_id: p_2XQ9edNzTjVFAjV2kU7q1C
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_d8y1utwtaYcMK43ACmYG79
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_a0bHTEkfCfH6JakZHi8Eol
          claim_id: c_S7tGd6m0pYW4n29liGIxy5
          source_id: s_oVpWLkJago8TdGx3yu9zCJ
          stance: supports
          locator: CBDB：兄弟 王凱（200743）之父／母 王舉
          quotation: null
          interpretation_note: 由兄弟关系推断：王寧 与 王凱 为同胞（CBDB 记「兄」），王凱 之父／母即 王寧 之父／母。
          source:
            id: s_oVpWLkJago8TdGx3yu9zCJ
            source_type: api_record
            title: 中国历代人物传记资料库：王寧（CBDB 262296）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262296&o=json
            external_identifier: CBDB:262296
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_d8y1utwtaYcMK43ACmYG79
        status: active
        display_name: 王寧
        merged_into_person_id: null
    - claim:
        id: c_jFgUaec6uL-FrsG-d5OyYw
        subject_person_id: p_2XQ9edNzTjVFAjV2kU7q1C
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_g2Gb3yfFytNs2NFtyXe7FU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vfJAcOEQXbYoKsYVyW82FU
          claim_id: c_jFgUaec6uL-FrsG-d5OyYw
          source_id: s_SRc6_w7iiRRpXOxhDFnWd4
          stance: supports
          locator: CBDB：兄弟 王凱（200743）之父／母 王舉
          quotation: null
          interpretation_note: 由兄弟关系推断：王元 与 王凱 为同胞（CBDB 记「弟」），王凱 之父／母即 王元 之父／母。
          source:
            id: s_SRc6_w7iiRRpXOxhDFnWd4
            source_type: api_record
            title: 中国历代人物传记资料库：王元（CBDB 262293）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262293&o=json
            external_identifier: CBDB:262293
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_g2Gb3yfFytNs2NFtyXe7FU
        status: active
        display_name: 王元
        merged_into_person_id: null
    - claim:
        id: c_UHSQTdgqu52jpRGEKr_bDw
        subject_person_id: p_2XQ9edNzTjVFAjV2kU7q1C
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ynLTzdQ5oVdbGv7oX59k2z
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Rlmon-xjXVjhaE0MMZUbav
          claim_id: c_UHSQTdgqu52jpRGEKr_bDw
          source_id: s_oGMU_sp14-VqBn18hR5ThE
          stance: supports
          locator: CBDB：兄弟 王凱（200743）之父／母 王舉
          quotation: null
          interpretation_note: 由兄弟关系推断：王傑 与 王凱 为同胞（CBDB 记「兄」），王凱 之父／母即 王傑 之父／母。
          source:
            id: s_oGMU_sp14-VqBn18hR5ThE
            source_type: api_record
            title: 中国历代人物传记资料库：王傑（CBDB 262294）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262294&o=json
            external_identifier: CBDB:262294
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ynLTzdQ5oVdbGv7oX59k2z
        status: active
        display_name: 王傑
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王舉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王舉 | accepted |
| bio.summary | 王舉，明人物。弘治三年進士，籍贯蠡縣，入仕監生。（中国历代人物传记资料库 CBDB 262289） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_z8mgWQExeo9ps9NYQ1o1hg | 王凱 | accepted |
| children | p_JmRrnSkxhs34xmMBgfdfLA | 王定 | accepted |
| children | p_d8y1utwtaYcMK43ACmYG79 | 王寧 | accepted |
| children | p_g2Gb3yfFytNs2NFtyXe7FU | 王元 | accepted |
| children | p_ynLTzdQ5oVdbGv7oX59k2z | 王傑 | accepted |

## 外部来源

- [中国历代人物传记资料库：王定（CBDB 262295）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262295&o=json)
- [中国历代人物传记资料库：王傑（CBDB 262294）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262294&o=json)
- [中国历代人物传记资料库：王舉（CBDB 262289）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262289&o=json)
- [中国历代人物传记资料库：王寧（CBDB 262296）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262296&o=json)
- [中国历代人物传记资料库：王元（CBDB 262293）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262293&o=json)

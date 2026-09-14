---
schema: wang-person/v1
id: p_1rFSs1MDWjoDEsWahgAEiH
status: active
merged_into: null
display_name: 王价
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kw7NSYmCqYkjxAHSLG8HvX
        subject_person_id: p_1rFSs1MDWjoDEsWahgAEiH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王价
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KLs2mg54UH8Yv8VE5Vyszh
          claim_id: c_kw7NSYmCqYkjxAHSLG8HvX
          source_id: s_M9yaR8CqAJmj8zfkhZpWnH
          stance: supports
          locator: CBDB:213745
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（213745）
          source: &a1
            id: s_M9yaR8CqAJmj8zfkhZpWnH
            source_type: api_record
            title: 中国历代人物传记资料库：王价（CBDB 213745）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213745&o=json
            external_identifier: CBDB:213745
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.122Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MzwBTQ4TYFE23Rmz9TMMYE
        subject_person_id: p_1rFSs1MDWjoDEsWahgAEiH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王价，明人物。萬曆二年進士，籍贯太原府。（中国历代人物传记资料库 CBDB 213745）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ep-i1_Y9ggwbIIgPTFsjiO
          claim_id: c_MzwBTQ4TYFE23Rmz9TMMYE
          source_id: s_M9yaR8CqAJmj8zfkhZpWnH
          stance: supports
          locator: CBDB:213745
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_MEknGWmaGtp59DlNOSx7Pa
        subject_person_id: p_QEEDRgkTG1gPE2Q7oYF5FU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1rFSs1MDWjoDEsWahgAEiH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NFbCKAsp6nJM-0AnM955CC
          claim_id: c_MEknGWmaGtp59DlNOSx7Pa
          source_id: s_2kaSR4u1KbVaQbgqKlCiO3
          stance: supports
          locator: CBDB：兄弟 王儒（206132）之父／母 王雲鵬
          quotation: null
          interpretation_note: 由兄弟关系推断：王价 与 王儒 为同胞（CBDB 记「兄」），王儒 之父／母即 王价 之父／母。
          source:
            id: s_2kaSR4u1KbVaQbgqKlCiO3
            source_type: api_record
            title: 中国历代人物传记资料库：王价（CBDB 213745）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213745&o=json
            external_identifier: CBDB:213745
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QEEDRgkTG1gPE2Q7oYF5FU
        status: active
        display_name: 王雲鵬
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_219-Ibg3kPiQrPrXj1uQLT
        subject_person_id: p_1rFSs1MDWjoDEsWahgAEiH
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_vzt49mQ7898sBQeKmR1Czu
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__1K8sqPiElUshtiLi2UaEy
          claim_id: c_219-Ibg3kPiQrPrXj1uQLT
          source_id: s_2kaSR4u1KbVaQbgqKlCiO3
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206132 王儒）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_2kaSR4u1KbVaQbgqKlCiO3
            source_type: api_record
            title: 中国历代人物传记资料库：王价（CBDB 213745）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213745&o=json
            external_identifier: CBDB:213745
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vzt49mQ7898sBQeKmR1Czu
        status: active
        display_name: 王儒
        merged_into_person_id: null
---

# 王价

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王价 | accepted |
| bio.summary | 王价，明人物。萬曆二年進士，籍贯太原府。（中国历代人物传记资料库 CBDB 213745） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_QEEDRgkTG1gPE2Q7oYF5FU | 王雲鵬 | accepted |
| other | p_vzt49mQ7898sBQeKmR1Czu | 王儒 | accepted |

## 外部来源

- [中国历代人物传记资料库：王价（CBDB 213745）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213745&o=json)

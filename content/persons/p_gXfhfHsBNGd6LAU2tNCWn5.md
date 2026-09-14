---
schema: wang-person/v1
id: p_gXfhfHsBNGd6LAU2tNCWn5
status: active
merged_into: null
display_name: 王輪
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mFs9LGz9m8Fu9LY8hC8U72
        subject_person_id: p_gXfhfHsBNGd6LAU2tNCWn5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王輪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mgtYnBjR31huPuazUgeS5z
          claim_id: c_mFs9LGz9m8Fu9LY8hC8U72
          source_id: s_pHu9k6Y75PDtaZ1SxCc1fc
          stance: supports
          locator: CBDB:266620
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（266620）
          source: &a1
            id: s_pHu9k6Y75PDtaZ1SxCc1fc
            source_type: api_record
            title: 中国历代人物传记资料库：王輪（CBDB 266620）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266620&o=json
            external_identifier: CBDB:266620
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.725Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ooKW1d43fdtKApSbg9Aqnh
        subject_person_id: p_gXfhfHsBNGd6LAU2tNCWn5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王輪，明人物。弘治六年進士，籍贯彭山。（中国历代人物传记资料库 CBDB 266620）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Caxj2e4pLQD7WexUyfoOFM
          claim_id: c_ooKW1d43fdtKApSbg9Aqnh
          source_id: s_pHu9k6Y75PDtaZ1SxCc1fc
          stance: supports
          locator: CBDB:266620
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_E7XYkbbS7Mkik-JZkekl_J
        subject_person_id: p_gXfhfHsBNGd6LAU2tNCWn5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wt4Rncm14h6MrnGgfPy2hA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OVyGYbIwzBDyACvFQsd9ck
          claim_id: c_E7XYkbbS7Mkik-JZkekl_J
          source_id: s_pHu9k6Y75PDtaZ1SxCc1fc
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第一百九十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_wt4Rncm14h6MrnGgfPy2hA
        status: active
        display_name: 王用才
        merged_into_person_id: null
    - claim:
        id: c_vbpkGK2q0H8sczFLlZ_Hkf
        subject_person_id: p_gXfhfHsBNGd6LAU2tNCWn5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5iaX7DSScmrC23GFCU66NX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mM7iGztQMW4QCrKo3FBxWA
          claim_id: c_vbpkGK2q0H8sczFLlZ_Hkf
          source_id: s_q1sug0m1_46MpFTXDeAtaN
          stance: supports
          locator: CBDB：兄弟 王用才（201069）之父／母 王輪
          quotation: null
          interpretation_note: 由兄弟关系推断：王用中 与 王用才 为同胞（CBDB 记「兄」），王用才 之父／母即 王用中 之父／母。
          source:
            id: s_q1sug0m1_46MpFTXDeAtaN
            source_type: api_record
            title: 中国历代人物传记资料库：王用中（CBDB 266623）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266623&o=json
            external_identifier: CBDB:266623
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5iaX7DSScmrC23GFCU66NX
        status: active
        display_name: 王用中
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王輪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王輪 | accepted |
| bio.summary | 王輪，明人物。弘治六年進士，籍贯彭山。（中国历代人物传记资料库 CBDB 266620） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_wt4Rncm14h6MrnGgfPy2hA | 王用才 | accepted |
| children | p_5iaX7DSScmrC23GFCU66NX | 王用中 | accepted |

## 外部来源

- [中国历代人物传记资料库：王輪（CBDB 266620）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266620&o=json)
- [中国历代人物传记资料库：王用中（CBDB 266623）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266623&o=json)

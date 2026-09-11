---
schema: wang-person/v1
id: p_qnL6JTk4AmGBe9uJN2PZjY
status: active
merged_into: null
display_name: 王杲
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dL5Goq5Gj71DUSRzdTY5ZY
        subject_person_id: p_qnL6JTk4AmGBe9uJN2PZjY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王杲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_d6RNaAvy5ZAT1PqE51QtE8
          claim_id: c_dL5Goq5Gj71DUSRzdTY5ZY
          source_id: s_ntQYiZajNxeAaFXBTPz8EP
          stance: supports
          locator: CBDB:297044
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（297044）
          source: &a1
            id: s_ntQYiZajNxeAaFXBTPz8EP
            source_type: api_record
            title: 中国历代人物传记资料库：王杲（CBDB 297044）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297044&o=json
            external_identifier: CBDB:297044
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.541Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hjeonqV3DaStQcmmC2fhCd
        subject_person_id: p_qnL6JTk4AmGBe9uJN2PZjY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6LvczcDjk9hnYPESEem6io
          claim_id: c_hjeonqV3DaStQcmmC2fhCd
          source_id: s_ntQYiZajNxeAaFXBTPz8EP
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_R9K4g426tq49aTHWkwhngL
        subject_person_id: p_qnL6JTk4AmGBe9uJN2PZjY
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dmToVAW68CjUAQM41bQAM7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fPF64qxtXdA5CbKFnnAjQT
          claim_id: c_R9K4g426tq49aTHWkwhngL
          source_id: s_MteD2GZsVB7qEbg4aAkNb8
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第三甲第九十二名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_MteD2GZsVB7qEbg4aAkNb8
            source_type: api_record
            title: 中国历代人物传记资料库：王世雍（CBDB 202939）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202939&o=json
            external_identifier: CBDB:202939
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.764Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_dmToVAW68CjUAQM41bQAM7
        status: active
        display_name: 王世雍
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王杲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王杲 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_dmToVAW68CjUAQM41bQAM7 | 王世雍 | accepted |

## 外部来源

- [中国历代人物传记资料库：王杲（CBDB 297044）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297044&o=json)
- [中国历代人物传记资料库：王世雍（CBDB 202939）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202939&o=json)

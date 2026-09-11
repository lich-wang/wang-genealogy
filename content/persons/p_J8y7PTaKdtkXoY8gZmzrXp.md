---
schema: wang-person/v1
id: p_J8y7PTaKdtkXoY8gZmzrXp
status: active
merged_into: null
display_name: 王琖
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_U6aNddDN16KxkNrrjEJidj
        subject_person_id: p_J8y7PTaKdtkXoY8gZmzrXp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qFt62qmYmNJmnUzYuYZz2L
          claim_id: c_U6aNddDN16KxkNrrjEJidj
          source_id: s_V5y4T54JMAsxkF9RNn8FEd
          stance: supports
          locator: CBDB:703952
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（703952）
          source: &a1
            id: s_V5y4T54JMAsxkF9RNn8FEd
            source_type: api_record
            title: 中国历代人物传记资料库：王琖（CBDB 703952）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703952&o=json
            external_identifier: CBDB:703952
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.636Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yg5D3yqicxE1Pb8fHrUJuh
        subject_person_id: p_J8y7PTaKdtkXoY8gZmzrXp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琖，清人物。籍贯上虞，身份为收徒講學、理學家，入仕廩生。（中国历代人物传记资料库 CBDB 703952）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LagJ82rT6rqW5gmx0np05j
          claim_id: c_yg5D3yqicxE1Pb8fHrUJuh
          source_id: s_V5y4T54JMAsxkF9RNn8FEd
          stance: supports
          locator: CBDB:703952
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_mY1GOvx1K0gL63bARPl-ey
        subject_person_id: p_2C4k9zyZUgQct3p5jHn1iC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_J8y7PTaKdtkXoY8gZmzrXp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_k71mfffYON3w2JQChiX2PE
          claim_id: c_mY1GOvx1K0gL63bARPl-ey
          source_id: s_MWFRdHD75aHR779emfcvYw
          stance: supports
          locator: 上虞縣志，lgid=325006：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_MWFRdHD75aHR779emfcvYw
            source_type: api_record
            title: 中国历代人物传记资料库：王濬（CBDB 562264）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=562264&o=json
            external_identifier: CBDB:562264
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.771Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2C4k9zyZUgQct3p5jHn1iC
        status: active
        display_name: 王濬
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王琖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琖 | accepted |
| bio.summary | 王琖，清人物。籍贯上虞，身份为收徒講學、理學家，入仕廩生。（中国历代人物传记资料库 CBDB 703952） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_2C4k9zyZUgQct3p5jHn1iC | 王濬 | accepted |

## 外部来源

- [中国历代人物传记资料库：王濬（CBDB 562264）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=562264&o=json)
- [中国历代人物传记资料库：王琖（CBDB 703952）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703952&o=json)

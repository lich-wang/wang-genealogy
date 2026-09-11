---
schema: wang-person/v1
id: p_4oHxxcQuZ8aafAWU1nrHfT
status: active
merged_into: null
display_name: 王徽
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qTFBoxerxTTco3PdN2nWdk
        subject_person_id: p_4oHxxcQuZ8aafAWU1nrHfT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王徽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_idJitvHu9DTm6ZTdwJyYCJ
          claim_id: c_qTFBoxerxTTco3PdN2nWdk
          source_id: s_yf8PWEFRGuif29TiGZ81ab
          stance: supports
          locator: CBDB:45815
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（45815）
          source: &a1
            id: s_yf8PWEFRGuif29TiGZ81ab
            source_type: api_record
            title: 中国历代人物传记资料库：王徽（CBDB 45815）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45815&o=json
            external_identifier: CBDB:45815
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.667Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Yi7sEX6sAJAax54SHhacva
        subject_person_id: p_4oHxxcQuZ8aafAWU1nrHfT
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1083年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kuKY3PzbVFdZD6CM48i4rA
          claim_id: c_Yi7sEX6sAJAax54SHhacva
          source_id: s_yf8PWEFRGuif29TiGZ81ab
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1ZxVH1q3XSCM4sCkR7eMGu
        subject_person_id: p_4oHxxcQuZ8aafAWU1nrHfT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王徽（卒于1083年），高麗人物。籍贯高麗，身份为統治者。（中国历代人物传记资料库 CBDB 45815）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MF3Z-PXgKWqfH6TyvfkDfZ
          claim_id: c_1ZxVH1q3XSCM4sCkR7eMGu
          source_id: s_yf8PWEFRGuif29TiGZ81ab
          stance: supports
          locator: CBDB:45815
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_cmZUUaos-CyWbEjzeuWz6q
        subject_person_id: p_LxBGWiTN9FN9EPfvaFKbj4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4oHxxcQuZ8aafAWU1nrHfT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wbrXFqAp_EEjgkL2fBunWB
          claim_id: c_cmZUUaos-CyWbEjzeuWz6q
          source_id: s_yf8PWEFRGuif29TiGZ81ab
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1261：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_LxBGWiTN9FN9EPfvaFKbj4
        status: active
        display_name: 王詢
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王徽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王徽 | accepted |
| death.date | 1083年 | accepted |
| bio.summary | 王徽（卒于1083年），高麗人物。籍贯高麗，身份为統治者。（中国历代人物传记资料库 CBDB 45815） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_LxBGWiTN9FN9EPfvaFKbj4 | 王詢 | accepted |

## 外部来源

- [中国历代人物传记资料库：王徽（CBDB 45815）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45815&o=json)

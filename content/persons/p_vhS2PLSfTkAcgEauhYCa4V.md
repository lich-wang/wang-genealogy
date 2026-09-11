---
schema: wang-person/v1
id: p_vhS2PLSfTkAcgEauhYCa4V
status: active
merged_into: null
display_name: 王仲仁
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_N2QnJBcLD6SfdV64Q7Fz2F
        subject_person_id: p_vhS2PLSfTkAcgEauhYCa4V
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲仁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_S7QPwWpJ85m8kJw3PWKdA6
          claim_id: c_N2QnJBcLD6SfdV64Q7Fz2F
          source_id: s_QRi4v28DMzD5QbpWE1DJ5Q
          stance: supports
          locator: CBDB:101137
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101137）
          source: &a1
            id: s_QRi4v28DMzD5QbpWE1DJ5Q
            source_type: api_record
            title: 中国历代人物传记资料库：王仲仁（CBDB 101137）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101137&o=json
            external_identifier: CBDB:101137
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.698Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qgeobBPGxvfZGHvY2FJu6J
        subject_person_id: p_vhS2PLSfTkAcgEauhYCa4V
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲仁，元人物。籍贯順天路，曾任副統軍使、管軍萬戶府萬戶、千戶。（中国历代人物传记资料库 CBDB 101137）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Ql48jE2a-zwDH0nzmtarGT
          claim_id: c_qgeobBPGxvfZGHvY2FJu6J
          source_id: s_QRi4v28DMzD5QbpWE1DJ5Q
          stance: supports
          locator: CBDB:101137
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_budjswGc3XX52vSk6v9UG8
        subject_person_id: p_vW6fBaV9FP5ccG4gt1uyf1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vhS2PLSfTkAcgEauhYCa4V
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_g5FE9fGZaHxCBnvjXH1Wae
          claim_id: c_budjswGc3XX52vSk6v9UG8
          source_id: s_QRi4v28DMzD5QbpWE1DJ5Q
          stance: supports
          locator: 元人傳記資料索引，972：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_vW6fBaV9FP5ccG4gt1uyf1
        status: active
        display_name: 王沂
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王仲仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仲仁 | accepted |
| bio.summary | 王仲仁，元人物。籍贯順天路，曾任副統軍使、管軍萬戶府萬戶、千戶。（中国历代人物传记资料库 CBDB 101137） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_vW6fBaV9FP5ccG4gt1uyf1 | 王沂 | accepted |

## 外部来源

- [中国历代人物传记资料库：王仲仁（CBDB 101137）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101137&o=json)

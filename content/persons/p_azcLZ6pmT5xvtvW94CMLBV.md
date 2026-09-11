---
schema: wang-person/v1
id: p_azcLZ6pmT5xvtvW94CMLBV
status: active
merged_into: null
display_name: 王時化
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_U17iA4ZCEZif9imgsgNFSi
        subject_person_id: p_azcLZ6pmT5xvtvW94CMLBV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時化
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sKmeF1aLGhN2gqwHGE7QQB
          claim_id: c_U17iA4ZCEZif9imgsgNFSi
          source_id: s_97PRyJJs1z9A9F3gEFLJBC
          stance: supports
          locator: CBDB:123798
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（123798）
          source: &a1
            id: s_97PRyJJs1z9A9F3gEFLJBC
            source_type: api_record
            title: 中国历代人物传记资料库：王時化（CBDB 123798）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=123798&o=json
            external_identifier: CBDB:123798
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.173Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_ySTx4R1unQZE8P5ZMSfR5J
        subject_person_id: p_azcLZ6pmT5xvtvW94CMLBV
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1637年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_r87spxm5V2N9veVEPYQxzL
          claim_id: c_ySTx4R1unQZE8P5ZMSfR5J
          source_id: s_97PRyJJs1z9A9F3gEFLJBC
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
        id: c_GuxSiAeF2mp9h9XuTyAjCi
        subject_person_id: p_azcLZ6pmT5xvtvW94CMLBV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時化（卒于1637年），明人物。籍贯武昌府，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 123798）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_URcwu1LkdctyGyTF0-XiDU
          claim_id: c_GuxSiAeF2mp9h9XuTyAjCi
          source_id: s_97PRyJJs1z9A9F3gEFLJBC
          stance: supports
          locator: CBDB:123798
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王時化

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王時化 | accepted |
| death.date | 1637年 | accepted |
| bio.summary | 王時化（卒于1637年），明人物。籍贯武昌府，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 123798） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王時化（CBDB 123798）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=123798&o=json)

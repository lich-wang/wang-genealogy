---
schema: wang-person/v1
id: p_s2J5zpzGQRs4xBc3sHzDTN
status: active
merged_into: null
display_name: 王光濟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NECjbeKDEzk67vL4TnEuAV
        subject_person_id: p_s2J5zpzGQRs4xBc3sHzDTN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光濟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DDsKN6Qjq2KqDeDUdp2MC1
          claim_id: c_NECjbeKDEzk67vL4TnEuAV
          source_id: s_y3Sox7opZWP7C6zr6qGmgH
          stance: supports
          locator: CBDB:38801
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38801）
          source: &a1
            id: s_y3Sox7opZWP7C6zr6qGmgH
            source_type: api_record
            title: 中国历代人物传记资料库：王光濟（CBDB 38801）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38801&o=json
            external_identifier: CBDB:38801
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.557Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8UGS2CQrbCCekQkfjzP2cJ
        subject_person_id: p_s2J5zpzGQRs4xBc3sHzDTN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光濟，宋人物。籍贯廬州，身份为孝子/孝女。（中国历代人物传记资料库 CBDB 38801）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XSw5CwN9r0gntV--ardxi-
          claim_id: c_8UGS2CQrbCCekQkfjzP2cJ
          source_id: s_y3Sox7opZWP7C6zr6qGmgH
          stance: supports
          locator: CBDB:38801
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

# 王光濟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王光濟 | accepted |
| bio.summary | 王光濟，宋人物。籍贯廬州，身份为孝子/孝女。（中国历代人物传记资料库 CBDB 38801） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王光濟（CBDB 38801）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38801&o=json)

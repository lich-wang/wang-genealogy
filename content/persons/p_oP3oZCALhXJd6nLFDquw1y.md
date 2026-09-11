---
schema: wang-person/v1
id: p_oP3oZCALhXJd6nLFDquw1y
status: active
merged_into: null
display_name: 王義樟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EUyqEGoFTFmVGKcshANbMw
        subject_person_id: p_oP3oZCALhXJd6nLFDquw1y
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王義樟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FskD2E3LU99GNn7qpqnNgU
          claim_id: c_EUyqEGoFTFmVGKcshANbMw
          source_id: s_nfkcGQNdtXBqxP3Tdjpt6n
          stance: supports
          locator: CBDB:71348
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71348）
          source: &a1
            id: s_nfkcGQNdtXBqxP3Tdjpt6n
            source_type: api_record
            title: 中国历代人物传记资料库：王義樟（CBDB 71348）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71348&o=json
            external_identifier: CBDB:71348
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.608Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_iTqLjmSCWC5pf7A2yjp3KU
        subject_person_id: p_oP3oZCALhXJd6nLFDquw1y
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1796年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JwSsHzUaZq6jwyhvHtFHeH
          claim_id: c_iTqLjmSCWC5pf7A2yjp3KU
          source_id: s_nfkcGQNdtXBqxP3Tdjpt6n
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UEKTx6ce2ZdDySLfqXAvqX
        subject_person_id: p_oP3oZCALhXJd6nLFDquw1y
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王義樟（生于1796年），清人物。籍贯閩縣。（中国历代人物传记资料库 CBDB 71348）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YJyNgQje9WzTceTOInAmmc
          claim_id: c_UEKTx6ce2ZdDySLfqXAvqX
          source_id: s_nfkcGQNdtXBqxP3Tdjpt6n
          stance: supports
          locator: CBDB:71348
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

# 王義樟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王義樟 | accepted |
| birth.date | 1796年 | accepted |
| bio.summary | 王義樟（生于1796年），清人物。籍贯閩縣。（中国历代人物传记资料库 CBDB 71348） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王義樟（CBDB 71348）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71348&o=json)

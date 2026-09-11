---
schema: wang-person/v1
id: p_76dFB8tR9hgErALJArJqLu
status: active
merged_into: null
display_name: 王嘉魚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hiNCTNsoP4cNKUtHHvM5W6
        subject_person_id: p_76dFB8tR9hgErALJArJqLu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉魚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_T288KgnXWVmaw5R9oyqGJB
          claim_id: c_hiNCTNsoP4cNKUtHHvM5W6
          source_id: s_uskA9GCKtCcN9dzrNfFs1q
          stance: supports
          locator: CBDB:696487
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（696487）
          source: &a1
            id: s_uskA9GCKtCcN9dzrNfFs1q
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉魚（CBDB 696487）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696487&o=json
            external_identifier: CBDB:696487
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.550Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5GPNFUZfg3eEDhfKMvWRbg
        subject_person_id: p_76dFB8tR9hgErALJArJqLu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王嘉魚，明人物。籍贯越嶲衛軍民指揮使司，入仕貢生: 歲貢、常貢、挨貢，曾任紀善、縣丞。（中国历代人物传记资料库 CBDB 696487）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_eBUp4EbSIft_apOBHv8_20
          claim_id: c_5GPNFUZfg3eEDhfKMvWRbg
          source_id: s_uskA9GCKtCcN9dzrNfFs1q
          stance: supports
          locator: CBDB:696487
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

# 王嘉魚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嘉魚 | accepted |
| bio.summary | 王嘉魚，明人物。籍贯越嶲衛軍民指揮使司，入仕貢生: 歲貢、常貢、挨貢，曾任紀善、縣丞。（中国历代人物传记资料库 CBDB 696487） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王嘉魚（CBDB 696487）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696487&o=json)

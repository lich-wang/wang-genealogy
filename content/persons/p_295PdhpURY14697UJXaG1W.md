---
schema: wang-person/v1
id: p_295PdhpURY14697UJXaG1W
status: active
merged_into: null
display_name: 王翱鳳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_v7nhTKz4PJzN3xKf6bJ73y
        subject_person_id: p_295PdhpURY14697UJXaG1W
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翱鳳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wtQJDnUPu1fNRvv8S6QQaM
          claim_id: c_v7nhTKz4PJzN3xKf6bJ73y
          source_id: s_vCDanuP6Qy4GTu9vxUeXE3
          stance: supports
          locator: CBDB:639906
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639906）
          source: &a1
            id: s_vCDanuP6Qy4GTu9vxUeXE3
            source_type: api_record
            title: 中国历代人物传记资料库：王翱鳳（CBDB 639906）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639906&o=json
            external_identifier: CBDB:639906
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.078Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ACDnoaWu8VYqYe9t2EH2tD
        subject_person_id: p_295PdhpURY14697UJXaG1W
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王翱鳳，清人物。籍贯昆明，入仕貢生: 拔貢，曾任知縣。（中国历代人物传记资料库 CBDB 639906）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_AlXxwKlnnQhfuznVAVdDMh
          claim_id: c_ACDnoaWu8VYqYe9t2EH2tD
          source_id: s_vCDanuP6Qy4GTu9vxUeXE3
          stance: supports
          locator: CBDB:639906
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

# 王翱鳳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王翱鳳 | accepted |
| bio.summary | 王翱鳳，清人物。籍贯昆明，入仕貢生: 拔貢，曾任知縣。（中国历代人物传记资料库 CBDB 639906） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王翱鳳（CBDB 639906）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639906&o=json)

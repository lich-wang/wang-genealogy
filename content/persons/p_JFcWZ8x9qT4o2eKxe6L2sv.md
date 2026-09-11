---
schema: wang-person/v1
id: p_JFcWZ8x9qT4o2eKxe6L2sv
status: active
merged_into: null
display_name: 王時發
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_F6kuUT1EknYCio3pZakxBZ
        subject_person_id: p_JFcWZ8x9qT4o2eKxe6L2sv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時發
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_92pvFx9racgDDcBVGwkKsY
          claim_id: c_F6kuUT1EknYCio3pZakxBZ
          source_id: s_vUhdKzQQTDzGin49WHyx3q
          stance: supports
          locator: CBDB:541236
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（541236）
          source: &a1
            id: s_vUhdKzQQTDzGin49WHyx3q
            source_type: api_record
            title: 中国历代人物传记资料库：王時發（CBDB 541236）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=541236&o=json
            external_identifier: CBDB:541236
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.457Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tkUaEzAoNtXW7CxhS1JTRY
        subject_person_id: p_JFcWZ8x9qT4o2eKxe6L2sv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時發，宋人物。籍贯閩縣，入仕特奏名進士、特奏名諸科 、大挑。（中国历代人物传记资料库 CBDB 541236）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vvzQDnk0LOeb1MB60u0yNy
          claim_id: c_tkUaEzAoNtXW7CxhS1JTRY
          source_id: s_vUhdKzQQTDzGin49WHyx3q
          stance: supports
          locator: CBDB:541236
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

# 王時發

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王時發 | accepted |
| bio.summary | 王時發，宋人物。籍贯閩縣，入仕特奏名進士、特奏名諸科 、大挑。（中国历代人物传记资料库 CBDB 541236） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王時發（CBDB 541236）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=541236&o=json)

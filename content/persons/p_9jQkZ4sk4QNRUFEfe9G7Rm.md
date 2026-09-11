---
schema: wang-person/v1
id: p_9jQkZ4sk4QNRUFEfe9G7Rm
status: active
merged_into: null
display_name: 王藹
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ozAhFuaUh7Jy21EC55PkQt
        subject_person_id: p_9jQkZ4sk4QNRUFEfe9G7Rm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王藹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8C5gynmZC2R7Fc9arqvZ6w
          claim_id: c_ozAhFuaUh7Jy21EC55PkQt
          source_id: s_5uyz8GZuqEaLxwL18Y8N7h
          stance: supports
          locator: CBDB:45835
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（45835）
          source: &a1
            id: s_5uyz8GZuqEaLxwL18Y8N7h
            source_type: api_record
            title: 中国历代人物传记资料库：王藹（CBDB 45835）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45835&o=json
            external_identifier: CBDB:45835
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.685Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_66vX4NVSKgMJxD7MSgqxyH
        subject_person_id: p_9jQkZ4sk4QNRUFEfe9G7Rm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王藹，宋人物。籍贯開封府，身份为畫家，曾任翰林圖畫院待詔。（中国历代人物传记资料库 CBDB 45835）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_g_TDByiTcPtbdj1eTfRtlB
          claim_id: c_66vX4NVSKgMJxD7MSgqxyH
          source_id: s_5uyz8GZuqEaLxwL18Y8N7h
          stance: supports
          locator: CBDB:45835
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

# 王藹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王藹 | accepted |
| bio.summary | 王藹，宋人物。籍贯開封府，身份为畫家，曾任翰林圖畫院待詔。（中国历代人物传记资料库 CBDB 45835） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王藹（CBDB 45835）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45835&o=json)

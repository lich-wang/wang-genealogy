---
schema: wang-person/v1
id: p_Mw4vqNC552xiZgCk9xRie9
status: active
merged_into: null
display_name: 王企靖
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8xpgaDV6woD9PewA86eKu4
        subject_person_id: p_Mw4vqNC552xiZgCk9xRie9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王企靖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eHfQccvMCfdcLL9hpuAUno
          claim_id: c_8xpgaDV6woD9PewA86eKu4
          source_id: s_oBZ1qHjQ6wubUw1L6t7ahF
          stance: supports
          locator: CBDB:343698
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343698）
          source: &a1
            id: s_oBZ1qHjQ6wubUw1L6t7ahF
            source_type: api_record
            title: 中国历代人物传记资料库：王企靖（CBDB 343698）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343698&o=json
            external_identifier: CBDB:343698
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.466Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_z7ikVRquK11abKZKgbdqeZ
        subject_person_id: p_Mw4vqNC552xiZgCk9xRie9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王企靖，清人物。明清進士進士，籍贯雄縣，入仕進士，曾任鄉試考官、御史。（中国历代人物传记资料库 CBDB 343698）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_D4sZpTDGlPUp_DC170VbEx
          claim_id: c_z7ikVRquK11abKZKgbdqeZ
          source_id: s_oBZ1qHjQ6wubUw1L6t7ahF
          stance: supports
          locator: CBDB:343698
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

# 王企靖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王企靖 | accepted |
| bio.summary | 王企靖，清人物。明清進士進士，籍贯雄縣，入仕進士，曾任鄉試考官、御史。（中国历代人物传记资料库 CBDB 343698） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王企靖（CBDB 343698）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343698&o=json)

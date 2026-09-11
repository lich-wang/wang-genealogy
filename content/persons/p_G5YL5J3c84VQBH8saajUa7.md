---
schema: wang-person/v1
id: p_G5YL5J3c84VQBH8saajUa7
status: active
merged_into: null
display_name: 王沃
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1i1MyzWxfHEYx4oPbW1LF9
        subject_person_id: p_G5YL5J3c84VQBH8saajUa7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王沃
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZvdyZ3zeHBuSAM88Fcv5W1
          claim_id: c_1i1MyzWxfHEYx4oPbW1LF9
          source_id: s_fez7s6kL15LuSPmtfpt7sw
          stance: supports
          locator: CBDB:38791
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38791）
          source: &a1
            id: s_fez7s6kL15LuSPmtfpt7sw
            source_type: api_record
            title: 中国历代人物传记资料库：王沃（CBDB 38791）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38791&o=json
            external_identifier: CBDB:38791
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.554Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZpgdoqJ1rZE6JoTn9GV4GL
        subject_person_id: p_G5YL5J3c84VQBH8saajUa7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王沃，宋人物。曾任通直郎、太子中舍人。（中国历代人物传记资料库 CBDB 38791）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_j4HZWtZS0yss27vaIxtWgi
          claim_id: c_ZpgdoqJ1rZE6JoTn9GV4GL
          source_id: s_fez7s6kL15LuSPmtfpt7sw
          stance: supports
          locator: CBDB:38791
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

# 王沃

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王沃 | accepted |
| bio.summary | 王沃，宋人物。曾任通直郎、太子中舍人。（中国历代人物传记资料库 CBDB 38791） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王沃（CBDB 38791）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38791&o=json)

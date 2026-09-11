---
schema: wang-person/v1
id: p_8z7AXYT1gdtFJqXKHTijhF
status: active
merged_into: null
display_name: 王鏞襄
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZwT3ghL3VTGqjDeVZBCe5x
        subject_person_id: p_8z7AXYT1gdtFJqXKHTijhF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鏞襄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_q5cREHhNjmduFHHwGBQJ71
          claim_id: c_ZwT3ghL3VTGqjDeVZBCe5x
          source_id: s_tgUA2JwK1YrvS6k1RXUfa6
          stance: supports
          locator: CBDB:640707
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640707）
          source: &a1
            id: s_tgUA2JwK1YrvS6k1RXUfa6
            source_type: api_record
            title: 中国历代人物传记资料库：王鏞襄（CBDB 640707）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640707&o=json
            external_identifier: CBDB:640707
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.342Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LDQv3WMcfqFg62Q3AcUPi8
        subject_person_id: p_8z7AXYT1gdtFJqXKHTijhF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鏞襄，清人物。籍贯青州府，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 640707）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EtNZLfQz13i-HgCY-Z-JdM
          claim_id: c_LDQv3WMcfqFg62Q3AcUPi8
          source_id: s_tgUA2JwK1YrvS6k1RXUfa6
          stance: supports
          locator: CBDB:640707
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

# 王鏞襄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鏞襄 | accepted |
| bio.summary | 王鏞襄，清人物。籍贯青州府，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 640707） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鏞襄（CBDB 640707）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640707&o=json)

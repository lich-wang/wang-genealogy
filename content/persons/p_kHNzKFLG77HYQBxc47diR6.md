---
schema: wang-person/v1
id: p_kHNzKFLG77HYQBxc47diR6
status: active
merged_into: null
display_name: 王尚賢
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3XRP47EswFcMq9uR5A2GDo
        subject_person_id: p_kHNzKFLG77HYQBxc47diR6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王尚賢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_59HVg5nb6B2n245TUk9CnM
          claim_id: c_3XRP47EswFcMq9uR5A2GDo
          source_id: s_ZdLDhUtoQFQAro98Mj9e1P
          stance: supports
          locator: CBDB:320457
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（320457）
          source: &a1
            id: s_ZdLDhUtoQFQAro98Mj9e1P
            source_type: api_record
            title: 中国历代人物传记资料库：王尚賢（CBDB 320457）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320457&o=json
            external_identifier: CBDB:320457
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.064Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CHKVZTa74y8uXKXF22dQpK
        subject_person_id: p_kHNzKFLG77HYQBxc47diR6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王尚賢，明人物。嘉靖三十五年進士，籍贯昌黎，入仕貢生: 歲貢、常貢、挨貢。（中国历代人物传记资料库 CBDB 320457）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_e9WUiMQvCI-kWuPx36_Rmk
          claim_id: c_CHKVZTa74y8uXKXF22dQpK
          source_id: s_ZdLDhUtoQFQAro98Mj9e1P
          stance: supports
          locator: CBDB:320457
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

# 王尚賢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王尚賢 | accepted |
| bio.summary | 王尚賢，明人物。嘉靖三十五年進士，籍贯昌黎，入仕貢生: 歲貢、常貢、挨貢。（中国历代人物传记资料库 CBDB 320457） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王尚賢（CBDB 320457）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320457&o=json)

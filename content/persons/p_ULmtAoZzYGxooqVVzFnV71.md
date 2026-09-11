---
schema: wang-person/v1
id: p_ULmtAoZzYGxooqVVzFnV71
status: active
merged_into: null
display_name: 王聞詩
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MKSSRJdssBnJ9Mkcods5F7
        subject_person_id: p_ULmtAoZzYGxooqVVzFnV71
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王聞詩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Nei1WHy2ijgyngd2KEzwPC
          claim_id: c_MKSSRJdssBnJ9Mkcods5F7
          source_id: s_R2SwVnw1EhkirDiw9jd3im
          stance: supports
          locator: CBDB:10599
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（10599）
          source: &a1
            id: s_R2SwVnw1EhkirDiw9jd3im
            source_type: api_record
            title: 中国历代人物传记资料库：王聞詩（CBDB 10599）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10599&o=json
            external_identifier: CBDB:10599
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.539Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_tPLjFHtD6ikr46Rkprq3cs
        subject_person_id: p_ULmtAoZzYGxooqVVzFnV71
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1141年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_txbbq6phXdhPw8Ki9qfdob
          claim_id: c_tPLjFHtD6ikr46Rkprq3cs
          source_id: s_R2SwVnw1EhkirDiw9jd3im
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_UNJUQDKBs4z9fMn9jvfYsy
        subject_person_id: p_ULmtAoZzYGxooqVVzFnV71
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1197年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EhygnYE9EgpqC19AKVEK3Y
          claim_id: c_UNJUQDKBs4z9fMn9jvfYsy
          source_id: s_R2SwVnw1EhkirDiw9jd3im
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_D83q3D3F7fdWs3dojjSXi3
        subject_person_id: p_ULmtAoZzYGxooqVVzFnV71
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王聞詩（1141年—1197年），宋人物。籍贯樂清，曾任路提點刑獄公事、樞密院檢詳諸房文字、尚書省吏部考功司郎中。（中国历代人物传记资料库 CBDB 10599）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_L7n5qUn5vmPodeg-_UtuLs
          claim_id: c_D83q3D3F7fdWs3dojjSXi3
          source_id: s_R2SwVnw1EhkirDiw9jd3im
          stance: supports
          locator: CBDB:10599
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

# 王聞詩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王聞詩 | accepted |
| birth.date | 1141年 | accepted |
| death.date | 1197年 | accepted |
| bio.summary | 王聞詩（1141年—1197年），宋人物。籍贯樂清，曾任路提點刑獄公事、樞密院檢詳諸房文字、尚書省吏部考功司郎中。（中国历代人物传记资料库 CBDB 10599） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王聞詩（CBDB 10599）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10599&o=json)

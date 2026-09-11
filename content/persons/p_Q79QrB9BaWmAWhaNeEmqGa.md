---
schema: wang-person/v1
id: p_Q79QrB9BaWmAWhaNeEmqGa
status: active
merged_into: null
display_name: 王履瑞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_srJQ9PZiePyFjK7mv1p22m
        subject_person_id: p_Q79QrB9BaWmAWhaNeEmqGa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王履瑞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_39cA7tzNJJscncnnY9dXAB
          claim_id: c_srJQ9PZiePyFjK7mv1p22m
          source_id: s_KkYafBz8dmQPqgpGPGc3Jo
          stance: supports
          locator: CBDB:637325
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637325）
          source: &a1
            id: s_KkYafBz8dmQPqgpGPGc3Jo
            source_type: api_record
            title: 中国历代人物传记资料库：王履瑞（CBDB 637325）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637325&o=json
            external_identifier: CBDB:637325
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.281Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rVqdBLipGZyJxv1GULMW5G
        subject_person_id: p_Q79QrB9BaWmAWhaNeEmqGa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王履瑞，清人物。籍贯霍州直隸州直轄地方，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 637325）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_kvuQhgx13OfWSK3IpG1riY
          claim_id: c_rVqdBLipGZyJxv1GULMW5G
          source_id: s_KkYafBz8dmQPqgpGPGc3Jo
          stance: supports
          locator: CBDB:637325
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

# 王履瑞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王履瑞 | accepted |
| bio.summary | 王履瑞，清人物。籍贯霍州直隸州直轄地方，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 637325） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王履瑞（CBDB 637325）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637325&o=json)

---
schema: wang-person/v1
id: p_QrC9EBvZjHMJGTurfmYvdC
status: active
merged_into: null
display_name: 朱筠
revision: 1
cbdb_id: 29951
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jD9vWgTV5uUhaB7zEETVGd
        subject_person_id: p_QrC9EBvZjHMJGTurfmYvdC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 朱筠（1729—1781），清人物。明清進士進士，籍贯大興，入仕進士，曾任編修、侍讀學士、同考官。（中国历代人物传记资料库 CBDB 29951）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5I-ExmhiZjOoW4yYnRuIQo
          claim_id: c_jD9vWgTV5uUhaB7zEETVGd
          source_id: s_fjQDzDxW8_RyI04L4et_k0
          stance: supports
          locator: CBDB:29951
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_fjQDzDxW8_RyI04L4et_k0
            source_type: api_record
            title: 中国历代人物传记资料库：朱筠（CBDB 29951）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29951&o=json
            external_identifier: CBDB:29951
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_6cJnRUgq0jTFswwZedNVDQ
        subject_person_id: p_QrC9EBvZjHMJGTurfmYvdC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 朱筠
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OXb4kUY-fT-4dRzzM8zHcr
          claim_id: c_6cJnRUgq0jTFswwZedNVDQ
          source_id: s_fjQDzDxW8_RyI04L4et_k0
          stance: supports
          locator: CBDB:29951
          quotation: null
          interpretation_note: CBDB 明确记录的王淑人配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_ZTqWNaFNgbOwABLjKTEotN
        subject_person_id: p_td4RPq8eExS2WZF67qDKoE
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_QrC9EBvZjHMJGTurfmYvdC
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OjazhJx8msgA3lnfPBEDye
          claim_id: c_ZTqWNaFNgbOwABLjKTEotN
          source_id: s_fjQDzDxW8_RyI04L4et_k0
          stance: supports
          locator: CBDB 双向互证（丈夫 朱筠）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_td4RPq8eExS2WZF67qDKoE
        status: active
        display_name: 王淑人
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 朱筠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 朱筠（1729—1781），清人物。明清進士進士，籍贯大興，入仕進士，曾任編修、侍讀學士、同考官。（中国历代人物传记资料库 CBDB 29951） | accepted |
| name.primary | 朱筠 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_td4RPq8eExS2WZF67qDKoE | 王淑人 | accepted |

## 外部来源

- [中国历代人物传记资料库：朱筠（CBDB 29951）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29951&o=json)

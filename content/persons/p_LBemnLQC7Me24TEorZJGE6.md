---
schema: wang-person/v1
id: p_LBemnLQC7Me24TEorZJGE6
status: active
merged_into: null
display_name: 王仲伸
cbdb_id: 157936
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bDUnuCXxW9yTU1iSM7CEdA
        subject_person_id: p_LBemnLQC7Me24TEorZJGE6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲伸，史料所见人物。本项目依据《中国历代人物传记资料库：王仲伸（CBDB 157936）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_o3ZEBa5c4S9Fs6RycKyuI7
          claim_id: c_bDUnuCXxW9yTU1iSM7CEdA
          source_id: s_BznpxMKDRnEUJsqyBWAHXN
          stance: supports
          locator: CBDB:157936
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_BznpxMKDRnEUJsqyBWAHXN
            source_type: api_record
            title: 中国历代人物传记资料库：王仲伸（CBDB 157936）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157936&o=json
            external_identifier: CBDB:157936
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.122Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_tYTwV5gW1hEr19d2QGPLqh
        subject_person_id: p_LBemnLQC7Me24TEorZJGE6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲伸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_4VZz9XexUKKV5ve9rB4smb
          claim_id: c_tYTwV5gW1hEr19d2QGPLqh
          source_id: s_BznpxMKDRnEUJsqyBWAHXN
          stance: supports
          locator: CBDB:157936
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2201-2300）｜历史性依据：CBDB 朝代 = 唐
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_m8zvVP-nz_4s8kMA3Puzok
        subject_person_id: p_nK9apVMeY253DbErnUEdp9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LBemnLQC7Me24TEorZJGE6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aRwhoAC6Xbw6_-oFmuCgC8
          claim_id: c_m8zvVP-nz_4s8kMA3Puzok
          source_id: s_bVmbR8kH1i5NZa5gpCFKZi
          stance: supports
          locator: 唐代墓誌匯編:二卷，Dahe 65：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_bVmbR8kH1i5NZa5gpCFKZi
            source_type: api_record
            title: 中国历代人物传记资料库：王翼（CBDB 141645）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141645&o=json
            external_identifier: CBDB:141645
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.561Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_nK9apVMeY253DbErnUEdp9
        status: active
        display_name: 王翼
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王仲伸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王仲伸，史料所见人物。本项目依据《中国历代人物传记资料库：王仲伸（CBDB 157936）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王仲伸 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_nK9apVMeY253DbErnUEdp9 | 王翼 | accepted |

## 外部来源

- [中国历代人物传记资料库：王翼（CBDB 141645）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141645&o=json)
- [中国历代人物传记资料库：王仲伸（CBDB 157936）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157936&o=json)

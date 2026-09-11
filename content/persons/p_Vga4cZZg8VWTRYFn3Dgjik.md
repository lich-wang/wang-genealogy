---
schema: wang-person/v1
id: p_Vga4cZZg8VWTRYFn3Dgjik
status: active
merged_into: null
display_name: 梁氏
revision: 1
cbdb_id: 39730
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2Gc30_3wcvVIH0XDKhJws4
        subject_person_id: p_Vga4cZZg8VWTRYFn3Dgjik
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 梁氏，史料所见人物。本项目依据《中国历代人物传记资料库：梁氏(向敏中妻)（CBDB 39730）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YytmKHccL-P2Gsq3AxM587
          claim_id: c_2Gc30_3wcvVIH0XDKhJws4
          source_id: s_7Myr77_PYfJnxgBpMNOyeM
          stance: supports
          locator: CBDB:39730
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_7Myr77_PYfJnxgBpMNOyeM
            source_type: api_record
            title: 中国历代人物传记资料库：梁氏(向敏中妻)（CBDB 39730）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39730&o=json
            external_identifier: CBDB:39730
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Zyu6tvDYfMMftyWDlXxQsR
        subject_person_id: p_Vga4cZZg8VWTRYFn3Dgjik
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 梁氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0MwdQ2mVaFnmUZcQJGkDOw
          claim_id: c_Zyu6tvDYfMMftyWDlXxQsR
          source_id: s_7Myr77_PYfJnxgBpMNOyeM
          stance: supports
          locator: CBDB:39730
          quotation: null
          interpretation_note: CBDB 明确记录的向敏中配偶
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
        id: c_VG0OHUjPZnPnto8AX-7FDy
        subject_person_id: p_juEm8j4Sb9dvXhaC1CMA9c
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_Vga4cZZg8VWTRYFn3Dgjik
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EVJaDgAhu2WsUVkPT5lAUY
          claim_id: c_VG0OHUjPZnPnto8AX-7FDy
          source_id: s_7Myr77_PYfJnxgBpMNOyeM
          stance: supports
          locator: 宋人傳記資料索引(電子版)：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_juEm8j4Sb9dvXhaC1CMA9c
        status: active
        display_name: 向敏中
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 梁氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 梁氏，史料所见人物。本项目依据《中国历代人物传记资料库：梁氏(向敏中妻)（CBDB 39730）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 梁氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_juEm8j4Sb9dvXhaC1CMA9c | 向敏中 | accepted |

## 外部来源

- [中国历代人物传记资料库：梁氏(向敏中妻)（CBDB 39730）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39730&o=json)

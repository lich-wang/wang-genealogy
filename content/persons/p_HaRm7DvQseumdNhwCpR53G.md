---
schema: wang-person/v1
id: p_HaRm7DvQseumdNhwCpR53G
status: active
merged_into: null
display_name: 王德文
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7mAfDbYHDfD3WYhs66mGzw
        subject_person_id: p_HaRm7DvQseumdNhwCpR53G
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德文
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MZioAfR9xDeEsHs8WgGZ1p
          claim_id: c_7mAfDbYHDfD3WYhs66mGzw
          source_id: s_WLoPrJqMGjCTJDYh91J6Q6
          stance: supports
          locator: CBDB:10343
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（10343）
          source: &a1
            id: s_WLoPrJqMGjCTJDYh91J6Q6
            source_type: api_record
            title: 中国历代人物传记资料库：王德文（CBDB 10343）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10343&o=json
            external_identifier: CBDB:10343
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.534Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_oP2gpGXBadUu9AZH8Wfpsi
        subject_person_id: p_HaRm7DvQseumdNhwCpR53G
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1190年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_S4fKGbzPgmxcSFwPUCcC4i
          claim_id: c_oP2gpGXBadUu9AZH8Wfpsi
          source_id: s_WLoPrJqMGjCTJDYh91J6Q6
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
        id: c_PxEB9dSDkKaFau15naMUfM
        subject_person_id: p_HaRm7DvQseumdNhwCpR53G
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1246年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7VMYZbezebxYTB13ZP9dFT
          claim_id: c_PxEB9dSDkKaFau15naMUfM
          source_id: s_WLoPrJqMGjCTJDYh91J6Q6
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
        id: c_59j2213NaqwEp2M1SMCSUg
        subject_person_id: p_HaRm7DvQseumdNhwCpR53G
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德文（1190年—1246年），宋人物。籍贯吳江，曾任縣尉、承節郎、承信郎。（中国历代人物传记资料库 CBDB 10343）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cZgKed1tSkmLmX7CYni1T0
          claim_id: c_59j2213NaqwEp2M1SMCSUg
          source_id: s_WLoPrJqMGjCTJDYh91J6Q6
          stance: supports
          locator: CBDB:10343
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_VSqMXRZ9OIqq03i7RiB4q6
        subject_person_id: p_HaRm7DvQseumdNhwCpR53G
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ETmjdmNWuRGDjjPH8p2fvR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8R7L0ShXM22-m5MTJ9m6-J
          claim_id: c_VSqMXRZ9OIqq03i7RiB4q6
          source_id: s_WLoPrJqMGjCTJDYh91J6Q6
          stance: supports
          locator: 宋人傳記資料索引(電子版)，769：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ETmjdmNWuRGDjjPH8p2fvR
        status: active
        display_name: 王敄
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王德文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德文 | accepted |
| birth.date | 1190年 | accepted |
| death.date | 1246年 | accepted |
| bio.summary | 王德文（1190年—1246年），宋人物。籍贯吳江，曾任縣尉、承節郎、承信郎。（中国历代人物传记资料库 CBDB 10343） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_ETmjdmNWuRGDjjPH8p2fvR | 王敄 | accepted |

## 外部来源

- [中国历代人物传记资料库：王德文（CBDB 10343）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10343&o=json)

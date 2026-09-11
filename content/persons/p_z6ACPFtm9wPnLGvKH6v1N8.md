---
schema: wang-person/v1
id: p_z6ACPFtm9wPnLGvKH6v1N8
status: active
merged_into: null
display_name: 王樓
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_E4qsFyL4iVZ8pqwxhy29Ct
        subject_person_id: p_z6ACPFtm9wPnLGvKH6v1N8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WpW5iUN9sttmb7KfujGzpm
          claim_id: c_E4qsFyL4iVZ8pqwxhy29Ct
          source_id: s_LdBe2P7acjGtnjCApr413s
          stance: supports
          locator: CBDB:233797
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（233797）
          source: &a1
            id: s_LdBe2P7acjGtnjCApr413s
            source_type: api_record
            title: 中国历代人物传记资料库：王樓（CBDB 233797）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233797&o=json
            external_identifier: CBDB:233797
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.722Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_urz6FXXmxtbti56FMt9ApQ
        subject_person_id: p_z6ACPFtm9wPnLGvKH6v1N8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樓，明人物。籍贯南充，入仕庠生，曾任文林郎。（中国历代人物传记资料库 CBDB 233797）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tHk75zPSim9cu_PSdQL48p
          claim_id: c_urz6FXXmxtbti56FMt9ApQ
          source_id: s_LdBe2P7acjGtnjCApr413s
          stance: supports
          locator: CBDB:233797
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_3i9-3rity6mSPJAJHq44N0
        subject_person_id: p_z6ACPFtm9wPnLGvKH6v1N8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Rv5ych5iExch2twdfSXkLP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wJkd7DOefEEeK_2law2f6y
          claim_id: c_3i9-3rity6mSPJAJHq44N0
          source_id: s_LdBe2P7acjGtnjCApr413s
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第三甲第三十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Rv5ych5iExch2twdfSXkLP
        status: active
        display_name: 王世蔭
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王樓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王樓 | accepted |
| bio.summary | 王樓，明人物。籍贯南充，入仕庠生，曾任文林郎。（中国历代人物传记资料库 CBDB 233797） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Rv5ych5iExch2twdfSXkLP | 王世蔭 | accepted |

## 外部来源

- [中国历代人物传记资料库：王樓（CBDB 233797）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233797&o=json)

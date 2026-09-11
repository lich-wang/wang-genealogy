---
schema: wang-person/v1
id: p_q8kfUyHi4DSEJ6L6oLkg4M
status: active
merged_into: null
display_name: 王問臣
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ra3hbJ9KJH3Nyh8TA9gMa4
        subject_person_id: p_q8kfUyHi4DSEJ6L6oLkg4M
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王問臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_N2E775gqJM8E8nqDwU5LRn
          claim_id: c_Ra3hbJ9KJH3Nyh8TA9gMa4
          source_id: s_2FP7ZStG4B87K5DUCTZJDQ
          stance: supports
          locator: CBDB:205162
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（205162）
          source: &a1
            id: s_2FP7ZStG4B87K5DUCTZJDQ
            source_type: api_record
            title: 中国历代人物传记资料库：王問臣（CBDB 205162）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205162&o=json
            external_identifier: CBDB:205162
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.855Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_ZBwXhvg6mW3LZRnPSJMGr6
        subject_person_id: p_q8kfUyHi4DSEJ6L6oLkg4M
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1525年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_23rN3rRXZV5unKjQmc3o5x
          claim_id: c_ZBwXhvg6mW3LZRnPSJMGr6
          source_id: s_2FP7ZStG4B87K5DUCTZJDQ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_k6oiKV6pD4KqJXVXaCwaNx
        subject_person_id: p_q8kfUyHi4DSEJ6L6oLkg4M
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王問臣（生于1525年），明人物。明清進士進士，籍贯長洲，身份为畫家，入仕進士。（中国历代人物传记资料库 CBDB 205162）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Wli6txPRpid8e55WCi95vF
          claim_id: c_k6oiKV6pD4KqJXVXaCwaNx
          source_id: s_2FP7ZStG4B87K5DUCTZJDQ
          stance: supports
          locator: CBDB:205162
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_O6SY3vEO07NPh4ZDmiheEV
        subject_person_id: p_Enkv6VPLQgLAYoVEPiVxJf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_q8kfUyHi4DSEJ6L6oLkg4M
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_m2Y63KsgfxMHs3R7gt5kfV
          claim_id: c_O6SY3vEO07NPh4ZDmiheEV
          source_id: s_7PENGV3jgRQN61G67J36Jo
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第一百八十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_7PENGV3jgRQN61G67J36Jo
            source_type: api_record
            title: 中国历代人物传记资料库：王明（CBDB 329112）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329112&o=json
            external_identifier: CBDB:329112
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.318Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Enkv6VPLQgLAYoVEPiVxJf
        status: active
        display_name: 王明
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_4BGP3DtE4pyyw0g94bA1QE
        subject_person_id: p_CKxjDR1LGVYYypW4hUBVVW
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_q8kfUyHi4DSEJ6L6oLkg4M
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2DS8wueBcTKPouFmKVYBnS
          claim_id: c_4BGP3DtE4pyyw0g94bA1QE
          source_id: s_v3tkFsuExWAtXMxpaPnk7m
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第一百八十五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_v3tkFsuExWAtXMxpaPnk7m
            source_type: api_record
            title: 中国历代人物传记资料库：王怡（CBDB 329111）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329111&o=json
            external_identifier: CBDB:329111
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.318Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_CKxjDR1LGVYYypW4hUBVVW
        status: active
        display_name: 王怡
        merged_into_person_id: null
    - claim:
        id: c_FCA5rstHDARCHyATdpmKmw
        subject_person_id: p_TxsiWLMYRbUpNBn66zX8Jt
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_q8kfUyHi4DSEJ6L6oLkg4M
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0KFoXQO6UUwEVxbYn62b4O
          claim_id: c_FCA5rstHDARCHyATdpmKmw
          source_id: s_pY6ZCnfide3S3RETM15R64
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第一百八十五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_pY6ZCnfide3S3RETM15R64
            source_type: api_record
            title: 中国历代人物传记资料库：王擇（CBDB 329110）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329110&o=json
            external_identifier: CBDB:329110
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.317Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_TxsiWLMYRbUpNBn66zX8Jt
        status: active
        display_name: 王擇
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王問臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王問臣 | accepted |
| birth.date | 1525年 | accepted |
| bio.summary | 王問臣（生于1525年），明人物。明清進士進士，籍贯長洲，身份为畫家，入仕進士。（中国历代人物传记资料库 CBDB 205162） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Enkv6VPLQgLAYoVEPiVxJf | 王明 | accepted |
| ancestors | p_CKxjDR1LGVYYypW4hUBVVW | 王怡 | accepted |
| ancestors | p_TxsiWLMYRbUpNBn66zX8Jt | 王擇 | accepted |

## 外部来源

- [中国历代人物传记资料库：王明（CBDB 329112）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329112&o=json)
- [中国历代人物传记资料库：王問臣（CBDB 205162）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205162&o=json)
- [中国历代人物传记资料库：王怡（CBDB 329111）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329111&o=json)
- [中国历代人物传记资料库：王擇（CBDB 329110）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329110&o=json)

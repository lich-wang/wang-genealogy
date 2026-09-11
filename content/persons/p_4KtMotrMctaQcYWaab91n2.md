---
schema: wang-person/v1
id: p_4KtMotrMctaQcYWaab91n2
status: active
merged_into: null
display_name: 王胡師
cbdb_id: 150533
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wtDhPe5hZKUCEsaEobfcVN
        subject_person_id: p_4KtMotrMctaQcYWaab91n2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王胡師，唐人物。中国历代人物传记资料库（CBDB）以人物编号 150533 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_iLheXrCqFS-6f6oC_UQ7Ky
          claim_id: c_wtDhPe5hZKUCEsaEobfcVN
          source_id: s_zCmrQxsHsoh1yQHeFVQHWj
          stance: supports
          locator: CBDB:150533
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_zCmrQxsHsoh1yQHeFVQHWj
            source_type: api_record
            title: 中国历代人物传记资料库：王胡師（CBDB 150533）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150533&o=json
            external_identifier: CBDB:150533
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:53.368Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_jqchHAYMaagA3Vx5RXTXVd
        subject_person_id: p_4KtMotrMctaQcYWaab91n2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王胡師
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ZFAgeuxp6Zg8iu9KbGLyo1
          claim_id: c_jqchHAYMaagA3Vx5RXTXVd
          source_id: s_zCmrQxsHsoh1yQHeFVQHWj
          stance: supports
          locator: CBDB:150533
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2101-2200）｜历史性依据：CBDB 朝代 = 唐
          source:
            id: s_zCmrQxsHsoh1yQHeFVQHWj
            source_type: api_record
            title: 中国历代人物传记资料库：王胡師（CBDB 150533）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150533&o=json
            external_identifier: CBDB:150533
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:53.368Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_izU4eaSCMHyi9qscwCmfhP
        subject_person_id: p_uaAMHJ66N58jAK54g3yzex
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4KtMotrMctaQcYWaab91n2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SzxyGc15VJwsRCB1oWc6Ih
          claim_id: c_izU4eaSCMHyi9qscwCmfhP
          source_id: s_Nt6nF28fYvG5y659nzmrGC
          stance: supports
          locator: 唐代墓誌匯編:二卷，Changan 65：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Nt6nF28fYvG5y659nzmrGC
            source_type: api_record
            title: 中国历代人物传记资料库：王敏（CBDB 140170）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140170&o=json
            external_identifier: CBDB:140170
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.479Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_uaAMHJ66N58jAK54g3yzex
        status: active
        display_name: 王敏
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王胡師

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王胡師，唐人物。中国历代人物传记资料库（CBDB）以人物编号 150533 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王胡師 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_uaAMHJ66N58jAK54g3yzex | 王敏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王胡師（CBDB 150533）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150533&o=json)
- [中国历代人物传记资料库：王敏（CBDB 140170）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140170&o=json)

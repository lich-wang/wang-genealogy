---
schema: wang-person/v1
id: p_uaAMHJ66N58jAK54g3yzex
status: active
merged_into: null
display_name: 王敏
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_U2qV2dubbwNk9ddZGT5ZPL
        subject_person_id: p_uaAMHJ66N58jAK54g3yzex
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9fpzm9GUGvD2UasSa8ny1d
          claim_id: c_U2qV2dubbwNk9ddZGT5ZPL
          source_id: s_Nt6nF28fYvG5y659nzmrGC
          stance: supports
          locator: CBDB:140170
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（140170）
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_MGuwwDPzhE3PiCPuXwB6Lt
        subject_person_id: p_uaAMHJ66N58jAK54g3yzex
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 644年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZefkXg1LEzseiBWxMUshAV
          claim_id: c_MGuwwDPzhE3PiCPuXwB6Lt
          source_id: s_Nt6nF28fYvG5y659nzmrGC
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
        id: c_7HHNLQT3CgwosmjH4yU9t8
        subject_person_id: p_uaAMHJ66N58jAK54g3yzex
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 704年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ascsgs68qCHby18v3iqAxX
          claim_id: c_7HHNLQT3CgwosmjH4yU9t8
          source_id: s_Nt6nF28fYvG5y659nzmrGC
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
        id: c_rb66avCKNFNnKrWQyjuA9E
        subject_person_id: p_uaAMHJ66N58jAK54g3yzex
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敏（644年—704年），周人物。籍贯永昌。（中国历代人物传记资料库 CBDB 140170）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Y79DgM4eUreidnYEp30YOs
          claim_id: c_rb66avCKNFNnKrWQyjuA9E
          source_id: s_Nt6nF28fYvG5y659nzmrGC
          stance: supports
          locator: CBDB:140170
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_UGtptpCoe2neWMfsNvY4v0
        subject_person_id: p_YryEUozc38E4eMFzKVvEC7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_uaAMHJ66N58jAK54g3yzex
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VjcrxZd7jlsTRoFkUdIZ8g
          claim_id: c_UGtptpCoe2neWMfsNvY4v0
          source_id: s_Nt6nF28fYvG5y659nzmrGC
          stance: supports
          locator: 唐代墓誌匯編:二卷，Changan 65：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_YryEUozc38E4eMFzKVvEC7
        status: active
        display_name: 王才
        merged_into_person_id: null
  children:
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
          source: *a1
      object_person:
        id: p_4KtMotrMctaQcYWaab91n2
        status: active
        display_name: 王胡師
        merged_into_person_id: null
    - claim:
        id: c_GRgZWAdYr3nJplUyOnolA8
        subject_person_id: p_uaAMHJ66N58jAK54g3yzex
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_L6M4SZMsciHvaQVG5T5vBP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_giyEY96nJhDq2aK4eNTRx0
          claim_id: c_GRgZWAdYr3nJplUyOnolA8
          source_id: s_Nt6nF28fYvG5y659nzmrGC
          stance: supports
          locator: 唐代墓誌匯編:二卷，Changan 65：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_L6M4SZMsciHvaQVG5T5vBP
        status: active
        display_name: 王英浦
        merged_into_person_id: null
    - claim:
        id: c_RCUCvG1VjnwkKfTM1DIqu2
        subject_person_id: p_uaAMHJ66N58jAK54g3yzex
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_siqLFzMJDv15681CERbPto
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HA6QPTm9IxvVrodRAnDisj
          claim_id: c_RCUCvG1VjnwkKfTM1DIqu2
          source_id: s_KZBhMbs33pVB7mUscRhas7
          stance: supports
          locator: 唐代墓誌匯編:二卷，Changan 65：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_KZBhMbs33pVB7mUscRhas7
            source_type: api_record
            title: 中国历代人物传记资料库：王十娘（CBDB 150532）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150532&o=json
            external_identifier: CBDB:150532
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:53.368Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_siqLFzMJDv15681CERbPto
        status: active
        display_name: 王十娘
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王敏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敏 | accepted |
| birth.date | 644年 | accepted |
| death.date | 704年 | accepted |
| bio.summary | 王敏（644年—704年），周人物。籍贯永昌。（中国历代人物传记资料库 CBDB 140170） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_YryEUozc38E4eMFzKVvEC7 | 王才 | accepted |
| children | p_4KtMotrMctaQcYWaab91n2 | 王胡師 | accepted |
| children | p_L6M4SZMsciHvaQVG5T5vBP | 王英浦 | accepted |
| children | p_siqLFzMJDv15681CERbPto | 王十娘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王敏（CBDB 140170）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140170&o=json)
- [中国历代人物传记资料库：王十娘（CBDB 150532）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150532&o=json)

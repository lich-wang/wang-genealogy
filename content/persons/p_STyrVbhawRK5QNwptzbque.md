---
schema: wang-person/v1
id: p_STyrVbhawRK5QNwptzbque
status: active
merged_into: null
display_name: 王泮
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Q8nTGjDF9SLWsGiwq7BNNQ
        subject_person_id: p_STyrVbhawRK5QNwptzbque
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王泮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fsH6zFwXQ5gPTM4gscyBFx
          claim_id: c_Q8nTGjDF9SLWsGiwq7BNNQ
          source_id: s_25NmxREkwxfK2c66oWrBF2
          stance: supports
          locator: CBDB:202013
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202013）
          source: &a1
            id: s_25NmxREkwxfK2c66oWrBF2
            source_type: api_record
            title: 中国历代人物传记资料库：王泮（CBDB 202013）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202013&o=json
            external_identifier: CBDB:202013
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.708Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_9TMRE7f3dSFRNenj74GTWC
        subject_person_id: p_STyrVbhawRK5QNwptzbque
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1488年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sEc3fuJw3K52KWN98qTAip
          claim_id: c_9TMRE7f3dSFRNenj74GTWC
          source_id: s_25NmxREkwxfK2c66oWrBF2
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
        id: c_3n1J8zFZf9cZb672H8LxhK
        subject_person_id: p_STyrVbhawRK5QNwptzbque
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王泮（生于1488年），明人物。明清進士進士，籍贯潞州衛，入仕進士。（中国历代人物传记资料库 CBDB 202013）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_u9a3CTdNmLGWqpDNZUS3vL
          claim_id: c_3n1J8zFZf9cZb672H8LxhK
          source_id: s_25NmxREkwxfK2c66oWrBF2
          stance: supports
          locator: CBDB:202013
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_TxpogaEAQuHTK8Gj-4PmAd
        subject_person_id: p_Jk84ENYUVyTz1ayR9hKQUA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_STyrVbhawRK5QNwptzbque
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qwGV6YIrq3rDaVIHI2OCol
          claim_id: c_TxpogaEAQuHTK8Gj-4PmAd
          source_id: s_LAwM7q4mMFQUN2pFQRi6Bz
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第一百三十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_LAwM7q4mMFQUN2pFQRi6Bz
            source_type: api_record
            title: 中国历代人物传记资料库：王鋀（CBDB 281994）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281994&o=json
            external_identifier: CBDB:281994
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.953Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_Jk84ENYUVyTz1ayR9hKQUA
        status: active
        display_name: 王鋀
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_ZfHP4BA3gjr_JocsFPG_Vf
        subject_person_id: p_8pnTcjHWUMYxQtPNQSK2SP
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_STyrVbhawRK5QNwptzbque
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4kOSZRXxf0PHjEk5HtD5hW
          claim_id: c_ZfHP4BA3gjr_JocsFPG_Vf
          source_id: s_GN1CwD6NS1X5pQn5aMg1KB
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第一百三十一名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_GN1CwD6NS1X5pQn5aMg1KB
            source_type: api_record
            title: 中国历代人物传记资料库：王憲（CBDB 281993）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281993&o=json
            external_identifier: CBDB:281993
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.056Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8pnTcjHWUMYxQtPNQSK2SP
        status: active
        display_name: 王憲
        merged_into_person_id: null
    - claim:
        id: c_TAJXfykpfJE9TvuSkWDCYe
        subject_person_id: p_CQYvS8eqRQM6jCnjmaneQ4
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_STyrVbhawRK5QNwptzbque
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pWFUTlZRsQyyZSSayME1Ma
          claim_id: c_TAJXfykpfJE9TvuSkWDCYe
          source_id: s_eNMxqaYHUeufUWj9Zhyjya
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第一百三十一名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_eNMxqaYHUeufUWj9Zhyjya
            source_type: api_record
            title: 中国历代人物传记资料库：王春（CBDB 281992）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281992&o=json
            external_identifier: CBDB:281992
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.056Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_CQYvS8eqRQM6jCnjmaneQ4
        status: active
        display_name: 王春
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王泮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王泮 | accepted |
| birth.date | 1488年 | accepted |
| bio.summary | 王泮（生于1488年），明人物。明清進士進士，籍贯潞州衛，入仕進士。（中国历代人物传记资料库 CBDB 202013） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Jk84ENYUVyTz1ayR9hKQUA | 王鋀 | accepted |
| ancestors | p_8pnTcjHWUMYxQtPNQSK2SP | 王憲 | accepted |
| ancestors | p_CQYvS8eqRQM6jCnjmaneQ4 | 王春 | accepted |

## 外部来源

- [中国历代人物传记资料库：王春（CBDB 281992）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281992&o=json)
- [中国历代人物传记资料库：王泮（CBDB 202013）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202013&o=json)
- [中国历代人物传记资料库：王鋀（CBDB 281994）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281994&o=json)
- [中国历代人物传记资料库：王憲（CBDB 281993）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281993&o=json)

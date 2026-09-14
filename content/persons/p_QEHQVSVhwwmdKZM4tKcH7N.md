---
schema: wang-person/v1
id: p_QEHQVSVhwwmdKZM4tKcH7N
status: active
merged_into: null
display_name: 王可久
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SUg47uvjvHtUbrNE5SczFq
        subject_person_id: p_QEHQVSVhwwmdKZM4tKcH7N
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王可久
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8U2U6Z2Bh3RiUWbvxcUcSq
          claim_id: c_SUg47uvjvHtUbrNE5SczFq
          source_id: s_gNoPh6G17PspbgktgrTs4X
          stance: supports
          locator: CBDB:227987
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（227987）
          source: &a1
            id: s_gNoPh6G17PspbgktgrTs4X
            source_type: api_record
            title: 中国历代人物传记资料库：王可久（CBDB 227987）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227987&o=json
            external_identifier: CBDB:227987
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.541Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1XgmWSvMYC3x6kKoWraUUe
        subject_person_id: p_QEHQVSVhwwmdKZM4tKcH7N
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王可久，明人物。萬曆丙戌科進士進士，籍贯來安，入仕廩生。（中国历代人物传记资料库 CBDB 227987）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_kmBXhdSun-JdDz-smN1FhP
          claim_id: c_1XgmWSvMYC3x6kKoWraUUe
          source_id: s_gNoPh6G17PspbgktgrTs4X
          stance: supports
          locator: CBDB:227987
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_MOmOPMS61IGV8ROuVD7Lw3
        subject_person_id: p_QEHQVSVhwwmdKZM4tKcH7N
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yt96UUYNj3ASszrYuN2kTm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-FNiHZhEPh-DSptGZjgNyc
          claim_id: c_MOmOPMS61IGV8ROuVD7Lw3
          source_id: s_gNoPh6G17PspbgktgrTs4X
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第二百四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_yt96UUYNj3ASszrYuN2kTm
        status: active
        display_name: 王嘉賓
        merged_into_person_id: null
    - claim:
        id: c_P3ybXyq5KuKgnthZ2AJWPr
        subject_person_id: p_QEHQVSVhwwmdKZM4tKcH7N
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9BvCHiCubRAk93yw2NkGXH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_n5BAr-gC6BFPSrvw2WAfue
          claim_id: c_P3ybXyq5KuKgnthZ2AJWPr
          source_id: s_5DOidZPXxeg6Px4eD7dSQ2
          stance: supports
          locator: CBDB：兄弟 王嘉賓（207120）之父／母 王可久
          quotation: null
          interpretation_note: 由兄弟关系推断：王嘉言 与 王嘉賓 为同胞（CBDB 记「兄」），王嘉賓 之父／母即 王嘉言 之父／母。
          source:
            id: s_5DOidZPXxeg6Px4eD7dSQ2
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉言（CBDB 227992）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227992&o=json
            external_identifier: CBDB:227992
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9BvCHiCubRAk93yw2NkGXH
        status: active
        display_name: 王嘉言
        merged_into_person_id: null
    - claim:
        id: c_ErZuw7BddXI5R9LBspu_-7
        subject_person_id: p_QEHQVSVhwwmdKZM4tKcH7N
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NMsWvVs52sZt7TNhLZuuaA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_d7X854tsL_CEa4-GAYuOty
          claim_id: c_ErZuw7BddXI5R9LBspu_-7
          source_id: s_-Qp9anh2OARnsk_jvIn1lp
          stance: supports
          locator: CBDB：兄弟 王嘉賓（207120）之父／母 王可久
          quotation: null
          interpretation_note: 由兄弟关系推断：王嘉謨 与 王嘉賓 为同胞（CBDB 记「兄」），王嘉賓 之父／母即 王嘉謨 之父／母。
          source:
            id: s_-Qp9anh2OARnsk_jvIn1lp
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉謨（CBDB 227993）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227993&o=json
            external_identifier: CBDB:227993
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NMsWvVs52sZt7TNhLZuuaA
        status: active
        display_name: 王嘉謨
        merged_into_person_id: null
    - claim:
        id: c_fGLoCnPuzt5aqtR0vFMf6g
        subject_person_id: p_QEHQVSVhwwmdKZM4tKcH7N
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_W7xf81cYGpndbKbb9WTodh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ldq4t0ghLLUIIFfvSAtPI3
          claim_id: c_fGLoCnPuzt5aqtR0vFMf6g
          source_id: s_3nCjiSWKpzrWFGXczbxkRA
          stance: supports
          locator: CBDB：兄弟 王嘉賓（207120）之父／母 王可久
          quotation: null
          interpretation_note: 由兄弟关系推断：王心純 与 王嘉賓 为同胞（CBDB 记「兄」），王嘉賓 之父／母即 王心純 之父／母。
          source:
            id: s_3nCjiSWKpzrWFGXczbxkRA
            source_type: api_record
            title: 中国历代人物传记资料库：王心純（CBDB 227996）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227996&o=json
            external_identifier: CBDB:227996
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_W7xf81cYGpndbKbb9WTodh
        status: active
        display_name: 王心純
        merged_into_person_id: null
    - claim:
        id: c_-HG8bfKU53r0GTWiftheQS
        subject_person_id: p_QEHQVSVhwwmdKZM4tKcH7N
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_uNfCVBMvgSPMUnT1cAEvLJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UM2K3bZH4GUz9IXGsL-s9R
          claim_id: c_-HG8bfKU53r0GTWiftheQS
          source_id: s_KV2pbt5AA9kjiFpXoi6Kyg
          stance: supports
          locator: CBDB：兄弟 王嘉賓（207120）之父／母 王可久
          quotation: null
          interpretation_note: 由兄弟关系推断：王嘉善 与 王嘉賓 为同胞（CBDB 记「兄」），王嘉賓 之父／母即 王嘉善 之父／母。
          source:
            id: s_KV2pbt5AA9kjiFpXoi6Kyg
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉善（CBDB 227991）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227991&o=json
            external_identifier: CBDB:227991
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_uNfCVBMvgSPMUnT1cAEvLJ
        status: active
        display_name: 王嘉善
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王可久

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王可久 | accepted |
| bio.summary | 王可久，明人物。萬曆丙戌科進士進士，籍贯來安，入仕廩生。（中国历代人物传记资料库 CBDB 227987） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_yt96UUYNj3ASszrYuN2kTm | 王嘉賓 | accepted |
| children | p_9BvCHiCubRAk93yw2NkGXH | 王嘉言 | accepted |
| children | p_NMsWvVs52sZt7TNhLZuuaA | 王嘉謨 | accepted |
| children | p_W7xf81cYGpndbKbb9WTodh | 王心純 | accepted |
| children | p_uNfCVBMvgSPMUnT1cAEvLJ | 王嘉善 | accepted |

## 外部来源

- [中国历代人物传记资料库：王嘉謨（CBDB 227993）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227993&o=json)
- [中国历代人物传记资料库：王嘉善（CBDB 227991）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227991&o=json)
- [中国历代人物传记资料库：王嘉言（CBDB 227992）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227992&o=json)
- [中国历代人物传记资料库：王可久（CBDB 227987）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227987&o=json)
- [中国历代人物传记资料库：王心純（CBDB 227996）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227996&o=json)

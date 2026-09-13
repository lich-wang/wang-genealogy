---
schema: wang-person/v1
id: p_xtFwKEaqPdvp16DkbDgGzk
status: active
merged_into: null
display_name: 孙氏
cbdb_id: 236880
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PEJ8C_Axd9vglPN3060jsY
        subject_person_id: p_xtFwKEaqPdvp16DkbDgGzk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 孙氏，明人物。正統四年進士。（中国历代人物传记资料库 CBDB 236880）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_2oi2ZN79fWod6spsAKPOmu
          claim_id: c_PEJ8C_Axd9vglPN3060jsY
          source_id: s_uyMqx86LVgdGn3q8eyKwoP
          stance: supports
          locator: CBDB:236880
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_uyMqx86LVgdGn3q8eyKwoP
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：孫氏（236880）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236880&o=json
            external_identifier: CBDB:236880
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:36.554Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_LAmfKi7BKEVeVkReSqC3Kp
        subject_person_id: p_xtFwKEaqPdvp16DkbDgGzk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 孙氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_bkoBU6ttjFnBP2L5XJ45Hp
          claim_id: c_LAmfKi7BKEVeVkReSqC3Kp
          source_id: s_uyMqx86LVgdGn3q8eyKwoP
          stance: supports
          locator: Q65838942
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_v1Xn6yZQCrHoTAYML1zVxs
          claim_id: c_LAmfKi7BKEVeVkReSqC3Kp
          source_id: s_M9J8nPtTtGBKZ6WAGAHwPe
          stance: supports
          locator: Q65838942
          quotation: null
          interpretation_note: null
          source:
            id: s_M9J8nPtTtGBKZ6WAGAHwPe
            source_type: api_record
            title: 维基数据：孙氏（Q65838942）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65838942
            external_identifier: Q65838942
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:36.412Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_FARwCbGLVr5qD48Kv9cw6N
        subject_person_id: p_eFMUZgTCSMLNfAAU1Qe6q2
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_xtFwKEaqPdvp16DkbDgGzk
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_R9fgDhk6KcTUB5XbfgxG9z
          claim_id: c_FARwCbGLVr5qD48Kv9cw6N
          source_id: s_M9J8nPtTtGBKZ6WAGAHwPe
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_M9J8nPtTtGBKZ6WAGAHwPe
            source_type: api_record
            title: 维基数据：孙氏（Q65838942）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65838942
            external_identifier: Q65838942
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:36.412Z
            metadata_json: null
        - id: cs_pS3kS8tJLSj1GZh3fUtxpe
          claim_id: c_FARwCbGLVr5qD48Kv9cw6N
          source_id: s_WCqcm1QhQX3b91GirjdXXG
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_WCqcm1QhQX3b91GirjdXXG
            source_type: api_record
            title: 维基数据：王竑（Q15900659）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15900659
            external_identifier: Q15900659
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:46:28.301Z
            metadata_json: null
        - id: cs_unKJGBHsu2qALrhT8dFFiC
          claim_id: c_FARwCbGLVr5qD48Kv9cw6N
          source_id: s_9m3TMe4sJkxGYCqC3bcohF
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：正統四年進士登科錄:一卷
          source:
            id: s_9m3TMe4sJkxGYCqC3bcohF
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王竑（67649）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67649&o=json
            external_identifier: CBDB:67649
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:01:15.914Z
            metadata_json: null
      object_person:
        id: p_eFMUZgTCSMLNfAAU1Qe6q2
        status: active
        display_name: 王竑
        merged_into_person_id: null
    - claim:
        id: c_33qnAPbQsjll0z3RqfnJyR
        subject_person_id: p_xtFwKEaqPdvp16DkbDgGzk
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_DNERe7qJNb3V7E5Uc4DPd7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vmk3RSeAq28XZup3SdZkAn
          claim_id: c_33qnAPbQsjll0z3RqfnJyR
          source_id: s_uyMqx86LVgdGn3q8eyKwoP
          stance: supports
          locator: 正統四年進士登科錄:一卷，第二甲第三十名：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_DNERe7qJNb3V7E5Uc4DPd7
        status: active
        display_name: 王竑
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 孙氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 孙氏，明人物。正統四年進士。（中国历代人物传记资料库 CBDB 236880） | accepted |
| name.primary | 孙氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_eFMUZgTCSMLNfAAU1Qe6q2 | 王竑 | accepted |
| spouses | p_DNERe7qJNb3V7E5Uc4DPd7 | 王竑 | accepted |

## 外部来源

- [维基数据：孙氏（Q65838942）](https://www.wikidata.org/wiki/Q65838942)
- [维基数据：王竑（Q15900659）](https://www.wikidata.org/wiki/Q15900659)
- [CBDB 中国历代人物传记资料库：孫氏（236880）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236880&o=json)
- [CBDB 中国历代人物传记资料库：王竑（67649）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67649&o=json)

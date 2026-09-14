---
schema: wang-person/v1
id: p_9KuNRr8o75Vr36yjwDeyAm
status: active
merged_into: null
display_name: 王應時
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TydyU58eCPMVm4VJPWp9F6
        subject_person_id: p_9KuNRr8o75Vr36yjwDeyAm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應時
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LzBMoh91Yq4h6rrsMCuLoK
          claim_id: c_TydyU58eCPMVm4VJPWp9F6
          source_id: s_ELwwMtVZvNEXahCJxGjJDF
          stance: supports
          locator: CBDB:334172
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（334172）
          source: &a1
            id: s_ELwwMtVZvNEXahCJxGjJDF
            source_type: api_record
            title: 中国历代人物传记资料库：王應時（CBDB 334172）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334172&o=json
            external_identifier: CBDB:334172
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.435Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Cc3bg6qJU5mdr7WoqW5PVz
        subject_person_id: p_9KuNRr8o75Vr36yjwDeyAm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應時，明人物。隆慶二年進士，籍贯太平，曾任訓導。（中国历代人物传记资料库 CBDB 334172）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8nsMl5cetcYwyPVvUbKi34
          claim_id: c_Cc3bg6qJU5mdr7WoqW5PVz
          source_id: s_ELwwMtVZvNEXahCJxGjJDF
          stance: supports
          locator: CBDB:334172
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_r6-lCLt6ab0q6hEnvdos9t
        subject_person_id: p_9KuNRr8o75Vr36yjwDeyAm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Que1Sc9ugp524zabUcC6Bk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lqk90QISX27lbqdrJaIvo2
          claim_id: c_r6-lCLt6ab0q6hEnvdos9t
          source_id: s_ELwwMtVZvNEXahCJxGjJDF
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第二甲第五十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Que1Sc9ugp524zabUcC6Bk
        status: active
        display_name: 王體復
        merged_into_person_id: null
    - claim:
        id: c_nQMBnIUSO7V7E3fSvWmBU4
        subject_person_id: p_9KuNRr8o75Vr36yjwDeyAm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7c57vbsCX5amL8hcYm4eB1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iQh0iJBH0lZDIxzb2zVpC3
          claim_id: c_nQMBnIUSO7V7E3fSvWmBU4
          source_id: s_LsATLxlRJimzbeqkTzHBJ8
          stance: supports
          locator: CBDB：兄弟 王體復（205493）之父／母 王應時
          quotation: null
          interpretation_note: 由兄弟关系推断：王體泰 与 王體復 为同胞（CBDB 记「兄」），王體復 之父／母即 王體泰 之父／母。
          source:
            id: s_LsATLxlRJimzbeqkTzHBJ8
            source_type: api_record
            title: 中国历代人物传记资料库：王體泰（CBDB 334179）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334179&o=json
            external_identifier: CBDB:334179
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7c57vbsCX5amL8hcYm4eB1
        status: active
        display_name: 王體泰
        merged_into_person_id: null
    - claim:
        id: c_QQcFd9lgSSirbmGC7M78HB
        subject_person_id: p_9KuNRr8o75Vr36yjwDeyAm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_92XH4vNeTuBz9QdW81YGcZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tG5WVVhuEjqFwG0txRCblu
          claim_id: c_QQcFd9lgSSirbmGC7M78HB
          source_id: s_IDOqFmQRzMy_X4aupGeblT
          stance: supports
          locator: CBDB：兄弟 王體復（205493）之父／母 王應時
          quotation: null
          interpretation_note: 由兄弟关系推断：王體震 与 王體復 为同胞（CBDB 记「弟」），王體復 之父／母即 王體震 之父／母。
          source:
            id: s_IDOqFmQRzMy_X4aupGeblT
            source_type: api_record
            title: 中国历代人物传记资料库：王體震（CBDB 334178）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334178&o=json
            external_identifier: CBDB:334178
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_92XH4vNeTuBz9QdW81YGcZ
        status: active
        display_name: 王體震
        merged_into_person_id: null
    - claim:
        id: c_CeyaTYu9DrWfQ6BWfgDf7q
        subject_person_id: p_9KuNRr8o75Vr36yjwDeyAm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9kNW5uYfeXVFmwU7j4A6re
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_J1_H78Dx5kya2YyDFOuR2R
          claim_id: c_CeyaTYu9DrWfQ6BWfgDf7q
          source_id: s_B3qSkgTVJSZ_BKj8SUwowT
          stance: supports
          locator: CBDB：兄弟 王體復（205493）之父／母 王應時
          quotation: null
          interpretation_note: 由兄弟关系推断：王體巽 与 王體復 为同胞（CBDB 记「兄」），王體復 之父／母即 王體巽 之父／母。
          source:
            id: s_B3qSkgTVJSZ_BKj8SUwowT
            source_type: api_record
            title: 中国历代人物传记资料库：王體巽（CBDB 334182）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334182&o=json
            external_identifier: CBDB:334182
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9kNW5uYfeXVFmwU7j4A6re
        status: active
        display_name: 王體巽
        merged_into_person_id: null
    - claim:
        id: c_RgeJaOdJV54i1SmKm5Megi
        subject_person_id: p_9KuNRr8o75Vr36yjwDeyAm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aXPBK6LgA91CQ9KrtgwDbN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Jj5q_WvtrzJwOdZcN85EXS
          claim_id: c_RgeJaOdJV54i1SmKm5Megi
          source_id: s_kC_OjskgomyODoDhpffB8b
          stance: supports
          locator: CBDB：兄弟 王體復（205493）之父／母 王應時
          quotation: null
          interpretation_note: 由兄弟关系推断：王體乾 与 王體復 为同胞（CBDB 记「弟」），王體復 之父／母即 王體乾 之父／母。
          source:
            id: s_kC_OjskgomyODoDhpffB8b
            source_type: api_record
            title: 中国历代人物传记资料库：王體乾（CBDB 334176）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334176&o=json
            external_identifier: CBDB:334176
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_aXPBK6LgA91CQ9KrtgwDbN
        status: active
        display_name: 王體乾
        merged_into_person_id: null
    - claim:
        id: c_1o6F2H__ioR-JRWZCr-H_y
        subject_person_id: p_9KuNRr8o75Vr36yjwDeyAm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nh77ph8B2fBSHWBwBLmhkS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_40rGxp0PF4SKqmhfatpGhH
          claim_id: c_1o6F2H__ioR-JRWZCr-H_y
          source_id: s_gwSMXANPcbJi4gPngSorMZ
          stance: supports
          locator: CBDB：兄弟 王體復（205493）之父／母 王應時
          quotation: null
          interpretation_note: 由兄弟关系推断：王體益 与 王體復 为同胞（CBDB 记「兄」），王體復 之父／母即 王體益 之父／母。
          source:
            id: s_gwSMXANPcbJi4gPngSorMZ
            source_type: api_record
            title: 中国历代人物传记资料库：王體益（CBDB 334181）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334181&o=json
            external_identifier: CBDB:334181
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nh77ph8B2fBSHWBwBLmhkS
        status: active
        display_name: 王體益
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王應時

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應時 | accepted |
| bio.summary | 王應時，明人物。隆慶二年進士，籍贯太平，曾任訓導。（中国历代人物传记资料库 CBDB 334172） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Que1Sc9ugp524zabUcC6Bk | 王體復 | accepted |
| children | p_7c57vbsCX5amL8hcYm4eB1 | 王體泰 | accepted |
| children | p_92XH4vNeTuBz9QdW81YGcZ | 王體震 | accepted |
| children | p_9kNW5uYfeXVFmwU7j4A6re | 王體巽 | accepted |
| children | p_aXPBK6LgA91CQ9KrtgwDbN | 王體乾 | accepted |
| children | p_nh77ph8B2fBSHWBwBLmhkS | 王體益 | accepted |

## 外部来源

- [中国历代人物传记资料库：王體乾（CBDB 334176）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334176&o=json)
- [中国历代人物传记资料库：王體泰（CBDB 334179）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334179&o=json)
- [中国历代人物传记资料库：王體巽（CBDB 334182）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334182&o=json)
- [中国历代人物传记资料库：王體益（CBDB 334181）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334181&o=json)
- [中国历代人物传记资料库：王體震（CBDB 334178）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334178&o=json)
- [中国历代人物传记资料库：王應時（CBDB 334172）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334172&o=json)

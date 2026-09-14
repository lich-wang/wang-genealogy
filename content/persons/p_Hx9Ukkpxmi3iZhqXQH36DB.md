---
schema: wang-person/v1
id: p_Hx9Ukkpxmi3iZhqXQH36DB
status: active
merged_into: null
display_name: 王隆
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_F8i4pxTtTU3MeHi9P9Zdca
        subject_person_id: p_Hx9Ukkpxmi3iZhqXQH36DB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王隆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9PciM6zqy65YMsTChjAFXN
          claim_id: c_F8i4pxTtTU3MeHi9P9Zdca
          source_id: s_4TpyDA2FgG8LHhCgwcHsS2
          stance: supports
          locator: CBDB:281213
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（281213）
          source: &a1
            id: s_4TpyDA2FgG8LHhCgwcHsS2
            source_type: api_record
            title: 中国历代人物传记资料库：王隆（CBDB 281213）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281213&o=json
            external_identifier: CBDB:281213
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.047Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KgHMNbCRACXCaJNRgY6HaG
        subject_person_id: p_Hx9Ukkpxmi3iZhqXQH36DB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王隆，明人物。正德十二年進士，籍贯淄川，入仕監生。（中国历代人物传记资料库 CBDB 281213）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CggNEG2DV4cMT3pX0bc5df
          claim_id: c_KgHMNbCRACXCaJNRgY6HaG
          source_id: s_4TpyDA2FgG8LHhCgwcHsS2
          stance: supports
          locator: CBDB:281213
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_Xul_iQdGN6IERKKbUCjk3t
        subject_person_id: p_Hx9Ukkpxmi3iZhqXQH36DB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5RJmgKA1SKHVMCFoAzk8Ch
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_d2VCQlTV1q2Pfxxn9UBtYJ
          claim_id: c_Xul_iQdGN6IERKKbUCjk3t
          source_id: s_4TpyDA2FgG8LHhCgwcHsS2
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第五十八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_5RJmgKA1SKHVMCFoAzk8Ch
        status: active
        display_name: 王納言
        merged_into_person_id: null
    - claim:
        id: c_sbAL0FLk-DGnkRuqMUARI-
        subject_person_id: p_Hx9Ukkpxmi3iZhqXQH36DB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4XKmdBpQ3uahe19sgFYba4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZSjRMJEScBeIo5IwuefrXg
          claim_id: c_sbAL0FLk-DGnkRuqMUARI-
          source_id: s_3qz-_-wTIK6nxDErQV1qgr
          stance: supports
          locator: CBDB：兄弟 王納言（126659）之父／母 王隆
          quotation: null
          interpretation_note: 由兄弟关系推断：王納訓 与 王納言 为同胞（CBDB 记「兄」），王納言 之父／母即 王納訓 之父／母。
          source:
            id: s_3qz-_-wTIK6nxDErQV1qgr
            source_type: api_record
            title: 中国历代人物传记资料库：王納訓（CBDB 281218）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281218&o=json
            external_identifier: CBDB:281218
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4XKmdBpQ3uahe19sgFYba4
        status: active
        display_name: 王納訓
        merged_into_person_id: null
    - claim:
        id: c_FPmTg8vZHXpPz9MQTNskYP
        subject_person_id: p_Hx9Ukkpxmi3iZhqXQH36DB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Nn2S6vQ9sH7rewLZdm6USf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NNlRUCDPMHObmy8RZrAoV_
          claim_id: c_FPmTg8vZHXpPz9MQTNskYP
          source_id: s_fFVnATryxANvUfF9ygo_l7
          stance: supports
          locator: CBDB：兄弟 王納言（126659）之父／母 王隆
          quotation: null
          interpretation_note: 由兄弟关系推断：王納陳 与 王納言 为同胞（CBDB 记「兄」），王納言 之父／母即 王納陳 之父／母。
          source:
            id: s_fFVnATryxANvUfF9ygo_l7
            source_type: api_record
            title: 中国历代人物传记资料库：王納陳（CBDB 281217）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281217&o=json
            external_identifier: CBDB:281217
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Nn2S6vQ9sH7rewLZdm6USf
        status: active
        display_name: 王納陳
        merged_into_person_id: null
    - claim:
        id: c_TT044-_MhnKpfqzmQ-tAJ2
        subject_person_id: p_Hx9Ukkpxmi3iZhqXQH36DB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XUikuFdnDAnyhChT1kKpqH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GE0sxlQXREwmhM--C-HlCl
          claim_id: c_TT044-_MhnKpfqzmQ-tAJ2
          source_id: s_0O_97IYh3NoRWCDmbJb7iE
          stance: supports
          locator: CBDB：兄弟 王納言（126659）之父／母 王隆
          quotation: null
          interpretation_note: 由兄弟关系推断：王納誨 与 王納言 为同胞（CBDB 记「兄」），王納言 之父／母即 王納誨 之父／母。
          source:
            id: s_0O_97IYh3NoRWCDmbJb7iE
            source_type: api_record
            title: 中国历代人物传记资料库：王納誨（CBDB 281216）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281216&o=json
            external_identifier: CBDB:281216
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_XUikuFdnDAnyhChT1kKpqH
        status: active
        display_name: 王納誨
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王隆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王隆 | accepted |
| bio.summary | 王隆，明人物。正德十二年進士，籍贯淄川，入仕監生。（中国历代人物传记资料库 CBDB 281213） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_5RJmgKA1SKHVMCFoAzk8Ch | 王納言 | accepted |
| children | p_4XKmdBpQ3uahe19sgFYba4 | 王納訓 | accepted |
| children | p_Nn2S6vQ9sH7rewLZdm6USf | 王納陳 | accepted |
| children | p_XUikuFdnDAnyhChT1kKpqH | 王納誨 | accepted |

## 外部来源

- [中国历代人物传记资料库：王隆（CBDB 281213）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281213&o=json)
- [中国历代人物传记资料库：王納陳（CBDB 281217）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281217&o=json)
- [中国历代人物传记资料库：王納誨（CBDB 281216）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281216&o=json)
- [中国历代人物传记资料库：王納訓（CBDB 281218）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281218&o=json)

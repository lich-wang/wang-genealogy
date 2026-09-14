---
schema: wang-person/v1
id: p_oyTVhAEFg6xseJqHnUDrTG
status: active
merged_into: null
display_name: 王挺
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6kV44hFdVLpDedMbSvDTt5
        subject_person_id: p_oyTVhAEFg6xseJqHnUDrTG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王挺
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cDU7z8CgpSG1jbwyRK7FN1
          claim_id: c_6kV44hFdVLpDedMbSvDTt5
          source_id: s_Ldi4KBNEQieraLyUm2og9d
          stance: supports
          locator: CBDB:1886
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1886）
          source: &a1
            id: s_Ldi4KBNEQieraLyUm2og9d
            source_type: api_record
            title: 中国历代人物传记资料库：王挺（CBDB 1886）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1886&o=json
            external_identifier: CBDB:1886
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.375Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AH7QMD7kq1mW2g5ms9PvYG
        subject_person_id: p_oyTVhAEFg6xseJqHnUDrTG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王挺，宋人物。籍贯成安，入仕進士，曾任三司戶部勾院、殿中侍御史、轉運使。（中国历代人物传记资料库 CBDB 1886）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2XXSwghxWnHa5Sxu_SaZXU
          claim_id: c_AH7QMD7kq1mW2g5ms9PvYG
          source_id: s_Ldi4KBNEQieraLyUm2og9d
          stance: supports
          locator: CBDB:1886
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_egNXNxmprVlRlkSLeGLETT
        subject_person_id: p_b2BNKpQqMbC3xJGHf9un3N
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oyTVhAEFg6xseJqHnUDrTG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DBBc7ruyvuKU2327BeRIgq
          claim_id: c_egNXNxmprVlRlkSLeGLETT
          source_id: s_JbzqPacsUNYua5DHnCyF-w
          stance: supports
          locator: CBDB 亲属：父（KinPerson 1855）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_JbzqPacsUNYua5DHnCyF-w
            source_type: api_record
            title: 中国历代人物传记资料库：王挺（CBDB 1886）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1886&o=json
            external_identifier: CBDB:1886
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_b2BNKpQqMbC3xJGHf9un3N
        status: active
        display_name: 王明
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_zTfGvWyuxGepXYa6_ahW1y
        subject_person_id: p_Myr7yL2y4NUdhUtw1bG9bq
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_oyTVhAEFg6xseJqHnUDrTG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QZ8njdod_O-HN2Bs2wE8os
          claim_id: c_zTfGvWyuxGepXYa6_ahW1y
          source_id: s_JbzqPacsUNYua5DHnCyF-w
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 1804 王扶）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_JbzqPacsUNYua5DHnCyF-w
            source_type: api_record
            title: 中国历代人物传记资料库：王挺（CBDB 1886）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1886&o=json
            external_identifier: CBDB:1886
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Myr7yL2y4NUdhUtw1bG9bq
        status: active
        display_name: 王扶
        merged_into_person_id: null
---

# 王挺

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王挺 | accepted |
| bio.summary | 王挺，宋人物。籍贯成安，入仕進士，曾任三司戶部勾院、殿中侍御史、轉運使。（中国历代人物传记资料库 CBDB 1886） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_b2BNKpQqMbC3xJGHf9un3N | 王明 | accepted |
| other | p_Myr7yL2y4NUdhUtw1bG9bq | 王扶 | accepted |

## 外部来源

- [中国历代人物传记资料库：王挺（CBDB 1886）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1886&o=json)

---
schema: wang-person/v1
id: p_x6tYqQFJHDF8Lt8wgXM9MU
status: active
merged_into: null
display_name: 王汝梅
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1mt6aefKhK2ns61otr4Wav
        subject_person_id: p_x6tYqQFJHDF8Lt8wgXM9MU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝梅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DaMbKM5KKZn6N538fEQ72y
          claim_id: c_1mt6aefKhK2ns61otr4Wav
          source_id: s_RZfr3UqAAHPb91u3CYS2Gh
          stance: supports
          locator: CBDB:68445
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（68445）
          source: &a1
            id: s_RZfr3UqAAHPb91u3CYS2Gh
            source_type: api_record
            title: 中国历代人物传记资料库：王汝梅（CBDB 68445）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68445&o=json
            external_identifier: CBDB:68445
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.071Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fFrZmYZvLqQBMENNj4yQBz
        subject_person_id: p_x6tYqQFJHDF8Lt8wgXM9MU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝梅，明人物。籍贯華陽，入仕進士，曾任戶科右給事中、戶科左給事中、禮科都給事中。（中国历代人物传记资料库 CBDB 68445）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_j_tS5wm0zE1gNvNsKVVC2G
          claim_id: c_fFrZmYZvLqQBMENNj4yQBz
          source_id: s_RZfr3UqAAHPb91u3CYS2Gh
          stance: supports
          locator: CBDB:68445
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_MqnFHMWOb__UIJmm2zzi36
        subject_person_id: p_M8mLU7jMxuqHMpgBkkJ8hB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_x6tYqQFJHDF8Lt8wgXM9MU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pZN9-OVe5cHfSSL1YxR9q5
          claim_id: c_MqnFHMWOb__UIJmm2zzi36
          source_id: s_GC7KhHLDBYxt1GDpJmnL8q
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第二百一十八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_GC7KhHLDBYxt1GDpJmnL8q
            source_type: api_record
            title: 中国历代人物传记资料库：王弼（CBDB 282871）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282871&o=json
            external_identifier: CBDB:282871
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.113Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_M8mLU7jMxuqHMpgBkkJ8hB
        status: active
        display_name: 王弼
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_8K1dGvFuRSTwYig59L-uOR
        subject_person_id: p_BM9rBC9C1cVxEoCYSovd5K
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_x6tYqQFJHDF8Lt8wgXM9MU
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BZDaEkQ32_zmcVV2AYLVQp
          claim_id: c_8K1dGvFuRSTwYig59L-uOR
          source_id: s_gFs7Rbg8JK9bR2DMJuiwkv
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第二百一十八名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_gFs7Rbg8JK9bR2DMJuiwkv
            source_type: api_record
            title: 中国历代人物传记资料库：王永忠（CBDB 282869）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282869&o=json
            external_identifier: CBDB:282869
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.112Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BM9rBC9C1cVxEoCYSovd5K
        status: active
        display_name: 王永忠
        merged_into_person_id: null
    - claim:
        id: c_0NVvQUuQk8CNRgnPcpDj-x
        subject_person_id: p_rMxe5a9Aq7M759LezaeBP1
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_x6tYqQFJHDF8Lt8wgXM9MU
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4-GXz-lDmVc0JcXf0F_A5y
          claim_id: c_0NVvQUuQk8CNRgnPcpDj-x
          source_id: s_MDQht7PtwXHiKnk48okDMz
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第二百一十八名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_MDQht7PtwXHiKnk48okDMz
            source_type: api_record
            title: 中国历代人物传记资料库：王義（CBDB 282870）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282870&o=json
            external_identifier: CBDB:282870
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.113Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_rMxe5a9Aq7M759LezaeBP1
        status: active
        display_name: 王義
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王汝梅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汝梅 | accepted |
| bio.summary | 王汝梅，明人物。籍贯華陽，入仕進士，曾任戶科右給事中、戶科左給事中、禮科都給事中。（中国历代人物传记资料库 CBDB 68445） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_M8mLU7jMxuqHMpgBkkJ8hB | 王弼 | accepted |
| ancestors | p_BM9rBC9C1cVxEoCYSovd5K | 王永忠 | accepted |
| ancestors | p_rMxe5a9Aq7M759LezaeBP1 | 王義 | accepted |

## 外部来源

- [中国历代人物传记资料库：王弼（CBDB 282871）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282871&o=json)
- [中国历代人物传记资料库：王汝梅（CBDB 68445）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68445&o=json)
- [中国历代人物传记资料库：王義（CBDB 282870）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282870&o=json)
- [中国历代人物传记资料库：王永忠（CBDB 282869）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282869&o=json)

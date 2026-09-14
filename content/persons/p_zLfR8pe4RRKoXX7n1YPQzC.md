---
schema: wang-person/v1
id: p_zLfR8pe4RRKoXX7n1YPQzC
status: active
merged_into: null
display_name: 王址
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SBhYPY8AFKo7jnPKdg86B1
        subject_person_id: p_zLfR8pe4RRKoXX7n1YPQzC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王址
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_499KfG59wC8RcsGi89wWx9
          claim_id: c_SBhYPY8AFKo7jnPKdg86B1
          source_id: s_k3soV8PVx8swWcDLDoDpNi
          stance: supports
          locator: CBDB:222821
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（222821）
          source: &a1
            id: s_k3soV8PVx8swWcDLDoDpNi
            source_type: api_record
            title: 中国历代人物传记资料库：王址（CBDB 222821）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222821&o=json
            external_identifier: CBDB:222821
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.397Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qcS5s55WH9L6mjNoPBfKt2
        subject_person_id: p_zLfR8pe4RRKoXX7n1YPQzC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王址，明人物。萬曆十一年進士，籍贯金壇，入仕監生。（中国历代人物传记资料库 CBDB 222821）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_R9EvJoCweoHnu2Fx5SQwn5
          claim_id: c_qcS5s55WH9L6mjNoPBfKt2
          source_id: s_k3soV8PVx8swWcDLDoDpNi
          stance: supports
          locator: CBDB:222821
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_BhgbBBN2dtOniZcK8A0PVP
        subject_person_id: p_oruQD3pLHzNQ8AvU3GVazK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zLfR8pe4RRKoXX7n1YPQzC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lQ_wW-fH2JzrjTN1KRNajU
          claim_id: c_BhgbBBN2dtOniZcK8A0PVP
          source_id: s_Euxm06HBb5h27GXRHiQUXx
          stance: supports
          locator: CBDB：兄弟 王堯封（126717）之父／母 王維熊
          quotation: null
          interpretation_note: 由兄弟关系推断：王址 与 王堯封 为同胞（CBDB 记「兄」），王堯封 之父／母即 王址 之父／母。
          source:
            id: s_Euxm06HBb5h27GXRHiQUXx
            source_type: api_record
            title: 中国历代人物传记资料库：王址（CBDB 222821）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222821&o=json
            external_identifier: CBDB:222821
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_oruQD3pLHzNQ8AvU3GVazK
        status: active
        display_name: 王維熊
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_tL_B9tSsGSrk4AVfFPxDj_
        subject_person_id: p_DpuSp4mmLYMfmUMioXctjR
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_zLfR8pe4RRKoXX7n1YPQzC
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SMalOGxH1lReAITgpCqYjs
          claim_id: c_tL_B9tSsGSrk4AVfFPxDj_
          source_id: s_Euxm06HBb5h27GXRHiQUXx
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126717 王堯封）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Euxm06HBb5h27GXRHiQUXx
            source_type: api_record
            title: 中国历代人物传记资料库：王址（CBDB 222821）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222821&o=json
            external_identifier: CBDB:222821
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DpuSp4mmLYMfmUMioXctjR
        status: active
        display_name: 王堯封
        merged_into_person_id: null
---

# 王址

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王址 | accepted |
| bio.summary | 王址，明人物。萬曆十一年進士，籍贯金壇，入仕監生。（中国历代人物传记资料库 CBDB 222821） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_oruQD3pLHzNQ8AvU3GVazK | 王維熊 | accepted |
| other | p_DpuSp4mmLYMfmUMioXctjR | 王堯封 | accepted |

## 外部来源

- [中国历代人物传记资料库：王址（CBDB 222821）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222821&o=json)

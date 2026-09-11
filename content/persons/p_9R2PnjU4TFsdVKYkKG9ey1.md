---
schema: wang-person/v1
id: p_9R2PnjU4TFsdVKYkKG9ey1
status: active
merged_into: null
display_name: 王師
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_B6Z9sDr8Z74q1L8C7R5nSv
        subject_person_id: p_9R2PnjU4TFsdVKYkKG9ey1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王師
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SnQ6THp39X6S18ggQ99H54
          claim_id: c_B6Z9sDr8Z74q1L8C7R5nSv
          source_id: s_4GMYnMdeW3aw1wHLc1HKGC
          stance: supports
          locator: CBDB:140308
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（140308）
          source: &a1
            id: s_4GMYnMdeW3aw1wHLc1HKGC
            source_type: api_record
            title: 中国历代人物传记资料库：王師（CBDB 140308）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140308&o=json
            external_identifier: CBDB:140308
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.492Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_p34wFLrYT3B8cJeSkrWTcj
        subject_person_id: p_9R2PnjU4TFsdVKYkKG9ey1
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 615年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MavFydyEKUtZTGHmZwDiky
          claim_id: c_p34wFLrYT3B8cJeSkrWTcj
          source_id: s_4GMYnMdeW3aw1wHLc1HKGC
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
        id: c_3J6HMa5t6fpVn6RVFe56Df
        subject_person_id: p_9R2PnjU4TFsdVKYkKG9ey1
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 670年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RgM8pUUUDLfDBvYR87kL2B
          claim_id: c_3J6HMa5t6fpVn6RVFe56Df
          source_id: s_4GMYnMdeW3aw1wHLc1HKGC
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
        id: c_cvGWe9iZs453ey4NqKdJ6K
        subject_person_id: p_9R2PnjU4TFsdVKYkKG9ey1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王師（615年—670年），唐人物。籍贯太原。（中国历代人物传记资料库 CBDB 140308）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LPoTmuImzdEnwgSjnxLkba
          claim_id: c_cvGWe9iZs453ey4NqKdJ6K
          source_id: s_4GMYnMdeW3aw1wHLc1HKGC
          stance: supports
          locator: CBDB:140308
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_F8JfAjLHKCg30DfwZU-voE
        subject_person_id: p_qJfbazWMyfyRTkG1DCoppW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9R2PnjU4TFsdVKYkKG9ey1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Mi2vxYy9DmdVih_YVxiDZD
          claim_id: c_F8JfAjLHKCg30DfwZU-voE
          source_id: s_4GMYnMdeW3aw1wHLc1HKGC
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 33：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_qJfbazWMyfyRTkG1DCoppW
        status: active
        display_name: 王隴
        merged_into_person_id: null
  children:
    - claim:
        id: c_9lEn9KZ95bM8dn5wg_8mf8
        subject_person_id: p_9R2PnjU4TFsdVKYkKG9ey1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qXxx9xLmZeLfa2PxAvYBgF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3NZVgDD8oEV1I6Wa_QbOcA
          claim_id: c_9lEn9KZ95bM8dn5wg_8mf8
          source_id: s_4GMYnMdeW3aw1wHLc1HKGC
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 33：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_qXxx9xLmZeLfa2PxAvYBgF
        status: active
        display_name: 王福
        merged_into_person_id: null
    - claim:
        id: c_1IGaYcDFN_3NF1o8nmC3H-
        subject_person_id: p_9R2PnjU4TFsdVKYkKG9ey1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gHkFYbMpMFGLHwHzMxr2aZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RokfGAst5WdsQPQBwcesQb
          claim_id: c_1IGaYcDFN_3NF1o8nmC3H-
          source_id: s_4GMYnMdeW3aw1wHLc1HKGC
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 33：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_gHkFYbMpMFGLHwHzMxr2aZ
        status: active
        display_name: 王藏
        merged_into_person_id: null
    - claim:
        id: c_peGkC1oQkumSmblYbGEvoJ
        subject_person_id: p_9R2PnjU4TFsdVKYkKG9ey1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Co2DGBdwu7WgzJPTb77dhb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VmPQ5OKcYdx7HhaCgImBKg
          claim_id: c_peGkC1oQkumSmblYbGEvoJ
          source_id: s_4GMYnMdeW3aw1wHLc1HKGC
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 33：嗣子(作為繼承人的兒子)
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Co2DGBdwu7WgzJPTb77dhb
        status: active
        display_name: 王思慶
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_vP2pZ-GqIBKaMadqGDlgUB
        subject_person_id: p_9R2PnjU4TFsdVKYkKG9ey1
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_Dwv6B5WWLjE9zkYK45FtM7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CbJqXV9CDaVLjxdD0Psis2
          claim_id: c_vP2pZ-GqIBKaMadqGDlgUB
          source_id: s_bj1v9UiFmY05Am0BsqLnvS
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 33：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_bj1v9UiFmY05Am0BsqLnvS
            source_type: api_record
            title: 中国历代人物传记资料库：楊氏(王師妻)（CBDB 151191）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=151191&o=json
            external_identifier: CBDB:151191
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Dwv6B5WWLjE9zkYK45FtM7
        status: active
        display_name: 楊氏
        merged_into_person_id: null
  ancestors: []
  descendants:
    - claim:
        id: c_up58a7T87P4kwMTOUlqQVI
        subject_person_id: p_9R2PnjU4TFsdVKYkKG9ey1
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_uDYRKyMyfPzTyBM5v6wNw4
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WX17QMlBClDBuWS8lFC8mR
          claim_id: c_up58a7T87P4kwMTOUlqQVI
          source_id: s_4GMYnMdeW3aw1wHLc1HKGC
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 33：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_uDYRKyMyfPzTyBM5v6wNw4
        status: active
        display_name: 王齊由
        merged_into_person_id: null
  other: []
---

# 王師

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王師 | accepted |
| birth.date | 615年 | accepted |
| death.date | 670年 | accepted |
| bio.summary | 王師（615年—670年），唐人物。籍贯太原。（中国历代人物传记资料库 CBDB 140308） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_qJfbazWMyfyRTkG1DCoppW | 王隴 | accepted |
| children | p_qXxx9xLmZeLfa2PxAvYBgF | 王福 | accepted |
| children | p_gHkFYbMpMFGLHwHzMxr2aZ | 王藏 | accepted |
| children | p_Co2DGBdwu7WgzJPTb77dhb | 王思慶 | accepted |
| spouses | p_Dwv6B5WWLjE9zkYK45FtM7 | 楊氏 | accepted |
| descendants | p_uDYRKyMyfPzTyBM5v6wNw4 | 王齊由 | accepted |

## 外部来源

- [中国历代人物传记资料库：王師（CBDB 140308）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140308&o=json)
- [中国历代人物传记资料库：楊氏(王師妻)（CBDB 151191）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=151191&o=json)

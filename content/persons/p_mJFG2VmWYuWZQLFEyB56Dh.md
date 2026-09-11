---
schema: wang-person/v1
id: p_mJFG2VmWYuWZQLFEyB56Dh
status: active
merged_into: null
display_name: 王來召
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WBdFTGDjD8g1awKsJzKbGk
        subject_person_id: p_mJFG2VmWYuWZQLFEyB56Dh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王來召
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bzM6DFsJmhtEMb5Pzj6CV6
          claim_id: c_WBdFTGDjD8g1awKsJzKbGk
          source_id: s_8FiMZbHAK3Ly7T3KxBM1AV
          stance: supports
          locator: CBDB:205587
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（205587）
          source: &a1
            id: s_8FiMZbHAK3Ly7T3KxBM1AV
            source_type: api_record
            title: 中国历代人物传记资料库：王來召（CBDB 205587）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205587&o=json
            external_identifier: CBDB:205587
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.865Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_FLV39Vo8GSiRLKnaH2EKVA
        subject_person_id: p_mJFG2VmWYuWZQLFEyB56Dh
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1541年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ME2tksKuPPeS1GTymf9z8d
          claim_id: c_FLV39Vo8GSiRLKnaH2EKVA
          source_id: s_8FiMZbHAK3Ly7T3KxBM1AV
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
        id: c_f5HyNCR9jXCM1ZidzReVVS
        subject_person_id: p_mJFG2VmWYuWZQLFEyB56Dh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王來召（生于1541年），明人物。隆慶二年進士，籍贯成安，入仕進士。（中国历代人物传记资料库 CBDB 205587）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WaIT7ol88H-RRBQ8GTPAfr
          claim_id: c_f5HyNCR9jXCM1ZidzReVVS
          source_id: s_8FiMZbHAK3Ly7T3KxBM1AV
          stance: supports
          locator: CBDB:205587
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_z4xbi6ysAf43OcfF_EWP3D
        subject_person_id: p_hZ7fSswDmKyd393yXgK7dU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mJFG2VmWYuWZQLFEyB56Dh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FQHZsXHYshTa1ML9xWjlpP
          claim_id: c_z4xbi6ysAf43OcfF_EWP3D
          source_id: s_ywmiqVsqmEVA1p5taHogkV
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第一百一十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ywmiqVsqmEVA1p5taHogkV
            source_type: api_record
            title: 中国历代人物传记资料库：王俊民（CBDB 335615）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335615&o=json
            external_identifier: CBDB:335615
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.468Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_hZ7fSswDmKyd393yXgK7dU
        status: active
        display_name: 王俊民
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_Se_lGcPoajHsP83R7IJ4tE
        subject_person_id: p_CJWjaHakq2qnjvbsYK3PmT
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_mJFG2VmWYuWZQLFEyB56Dh
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IMoOqkWx7WjiRjDbvxvV3A
          claim_id: c_Se_lGcPoajHsP83R7IJ4tE
          source_id: s_w789UgAxGpxAw3X6QRimCB
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第一百一十五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_w789UgAxGpxAw3X6QRimCB
            source_type: api_record
            title: 中国历代人物传记资料库：王成（CBDB 335614）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335614&o=json
            external_identifier: CBDB:335614
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.467Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_CJWjaHakq2qnjvbsYK3PmT
        status: active
        display_name: 王成
        merged_into_person_id: null
    - claim:
        id: c_9Q6FjLBtU_cNGDW2cCzhVH
        subject_person_id: p_XqFzP2HT1fnv6EsejBDm7i
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_mJFG2VmWYuWZQLFEyB56Dh
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nVumfDf-FK0nYXEUBJEmh5
          claim_id: c_9Q6FjLBtU_cNGDW2cCzhVH
          source_id: s_r1qjUx4zzNHZaaqaLUEKv5
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第一百一十五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_r1qjUx4zzNHZaaqaLUEKv5
            source_type: api_record
            title: 中国历代人物传记资料库：王才（CBDB 335613）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335613&o=json
            external_identifier: CBDB:335613
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.465Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_XqFzP2HT1fnv6EsejBDm7i
        status: active
        display_name: 王才
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王來召

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王來召 | accepted |
| birth.date | 1541年 | accepted |
| bio.summary | 王來召（生于1541年），明人物。隆慶二年進士，籍贯成安，入仕進士。（中国历代人物传记资料库 CBDB 205587） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_hZ7fSswDmKyd393yXgK7dU | 王俊民 | accepted |
| ancestors | p_CJWjaHakq2qnjvbsYK3PmT | 王成 | accepted |
| ancestors | p_XqFzP2HT1fnv6EsejBDm7i | 王才 | accepted |

## 外部来源

- [中国历代人物传记资料库：王才（CBDB 335613）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335613&o=json)
- [中国历代人物传记资料库：王成（CBDB 335614）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335614&o=json)
- [中国历代人物传记资料库：王俊民（CBDB 335615）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335615&o=json)
- [中国历代人物传记资料库：王來召（CBDB 205587）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205587&o=json)

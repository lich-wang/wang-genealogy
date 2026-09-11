---
schema: wang-person/v1
id: p_DxMro6Z24bPYtmEPhHPt4K
status: active
merged_into: null
display_name: 王麟趾
cbdb_id: 206638
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KjaaK9KPLRbBvu2N81ThmH
        subject_person_id: p_DxMro6Z24bPYtmEPhHPt4K
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王麟趾（生于1556年），明人物。中国历代人物传记资料库（CBDB）以人物编号 206638 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_VTxYf9bg0Nz6k7ytGVHM-i
          claim_id: c_KjaaK9KPLRbBvu2N81ThmH
          source_id: s_DAS6fWH9ddGdKfE5fe5T8E
          stance: supports
          locator: CBDB:206638
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_DAS6fWH9ddGdKfE5fe5T8E
            source_type: api_record
            title: 中国历代人物传记资料库：王麟趾（CBDB 206638）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206638&o=json
            external_identifier: CBDB:206638
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_PCi8vKf2ufPgAY2sZAZ5hU
        subject_person_id: p_DxMro6Z24bPYtmEPhHPt4K
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1556年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1556-01-01
            latest: 1556-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nA7zHe6YCnRGkdezr5Z8Aw
          claim_id: c_PCi8vKf2ufPgAY2sZAZ5hU
          source_id: s_DAS6fWH9ddGdKfE5fe5T8E
          stance: supports
          locator: CBDB:206638
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1556
          source:
            id: s_DAS6fWH9ddGdKfE5fe5T8E
            source_type: api_record
            title: 中国历代人物传记资料库：王麟趾（CBDB 206638）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206638&o=json
            external_identifier: CBDB:206638
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_p1Hd7qtuAE4r2jefoQ1Zui
        subject_person_id: p_DxMro6Z24bPYtmEPhHPt4K
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王麟趾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_pMgtHTes2sFXqZBhT3q1NK
          claim_id: c_p1Hd7qtuAE4r2jefoQ1Zui
          source_id: s_DAS6fWH9ddGdKfE5fe5T8E
          stance: supports
          locator: CBDB:206638
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1556
          source:
            id: s_DAS6fWH9ddGdKfE5fe5T8E
            source_type: api_record
            title: 中国历代人物传记资料库：王麟趾（CBDB 206638）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206638&o=json
            external_identifier: CBDB:206638
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_uQ_VDjgZeHx3yFSgAyrBhn
        subject_person_id: p_pxuEEW3UEiC2znXj3WAZP7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DxMro6Z24bPYtmEPhHPt4K
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UpfolOVgQbvpkurWt5BU1D
          claim_id: c_uQ_VDjgZeHx3yFSgAyrBhn
          source_id: s_aoRc3e1Z6kmWc3HUKQCJGS
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第三甲第一百三十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_aoRc3e1Z6kmWc3HUKQCJGS
            source_type: api_record
            title: 中国历代人物传记资料库：王宣（CBDB 220839）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220839&o=json
            external_identifier: CBDB:220839
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.310Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_pxuEEW3UEiC2znXj3WAZP7
        status: active
        display_name: 王宣
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_r4lFLC9hwHTj5LE2w_Qnkd
        subject_person_id: p_MMRBBo7czt6yaxo2ZFLE5C
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DxMro6Z24bPYtmEPhHPt4K
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6_itdDVjSpoD_ca-0MsJ1X
          claim_id: c_r4lFLC9hwHTj5LE2w_Qnkd
          source_id: s_mhmp5U8fZMFFT4SBr5Uz74
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第三甲第一百三十六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_mhmp5U8fZMFFT4SBr5Uz74
            source_type: api_record
            title: 中国历代人物传记资料库：王臣（CBDB 220837）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220837&o=json
            external_identifier: CBDB:220837
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.309Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_MMRBBo7czt6yaxo2ZFLE5C
        status: active
        display_name: 王臣
        merged_into_person_id: null
    - claim:
        id: c_tM8UghcxQs_sYZIe6JLOZY
        subject_person_id: p_sxkopmD3LHP8oHmfhdYMGy
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DxMro6Z24bPYtmEPhHPt4K
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uGYKsDKkbB-kOlPrrZnTe4
          claim_id: c_tM8UghcxQs_sYZIe6JLOZY
          source_id: s_3fB1L6ZTERqRMSJBKU5HCt
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第三甲第一百三十六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_3fB1L6ZTERqRMSJBKU5HCt
            source_type: api_record
            title: 中国历代人物传记资料库：王重（CBDB 220836）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220836&o=json
            external_identifier: CBDB:220836
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.308Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_sxkopmD3LHP8oHmfhdYMGy
        status: active
        display_name: 王重
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王麟趾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王麟趾（生于1556年），明人物。中国历代人物传记资料库（CBDB）以人物编号 206638 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| birth.date | 1556年 | accepted |
| name.primary | 王麟趾 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_pxuEEW3UEiC2znXj3WAZP7 | 王宣 | accepted |
| ancestors | p_MMRBBo7czt6yaxo2ZFLE5C | 王臣 | accepted |
| ancestors | p_sxkopmD3LHP8oHmfhdYMGy | 王重 | accepted |

## 外部来源

- [中国历代人物传记资料库：王臣（CBDB 220837）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220837&o=json)
- [中国历代人物传记资料库：王麟趾（CBDB 206638）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206638&o=json)
- [中国历代人物传记资料库：王宣（CBDB 220839）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220839&o=json)
- [中国历代人物传记资料库：王重（CBDB 220836）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220836&o=json)

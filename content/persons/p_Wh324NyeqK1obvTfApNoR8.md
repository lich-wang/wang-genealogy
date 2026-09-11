---
schema: wang-person/v1
id: p_Wh324NyeqK1obvTfApNoR8
status: active
merged_into: null
display_name: 王肇
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dNmweri1LmQBFGo7ii98JY
        subject_person_id: p_Wh324NyeqK1obvTfApNoR8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王肇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5qwBuGLF8Fb1TQS96FSKBU
          claim_id: c_dNmweri1LmQBFGo7ii98JY
          source_id: s_dahPsiAddwBstSE7bJ3Jbn
          stance: supports
          locator: CBDB:23405
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（23405）
          source: &a1
            id: s_dahPsiAddwBstSE7bJ3Jbn
            source_type: api_record
            title: 中国历代人物传记资料库：王肇（CBDB 23405）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23405&o=json
            external_identifier: CBDB:23405
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.880Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TFHrv8HEqoMk71Cg9e7TwH
        subject_person_id: p_Wh324NyeqK1obvTfApNoR8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王肇，宋人物。籍贯南安，曾任州學博士。（中国历代人物传记资料库 CBDB 23405）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_om5EbbIJYkvx5m-dSeW9u0
          claim_id: c_TFHrv8HEqoMk71Cg9e7TwH
          source_id: s_dahPsiAddwBstSE7bJ3Jbn
          stance: supports
          locator: CBDB:23405
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_tegcUZQYVV229Nk-Q40rWT
        subject_person_id: p_aHeAmqcGVyBmd5DEnHtvrt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Wh324NyeqK1obvTfApNoR8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bfV7jB9ptff0hO9v1rG1GX
          claim_id: c_tegcUZQYVV229Nk-Q40rWT
          source_id: s_Y1pDBFA71gVGdvYfjt74T1
          stance: supports
          locator: CBDB 双向互证（子 王肇 ⇄ 父 王纘）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_Y1pDBFA71gVGdvYfjt74T1
            source_type: api_record
            title: 中国历代人物传记资料库：王纘（CBDB 23404）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23404&o=json
            external_identifier: CBDB:23404
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.879Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_aHeAmqcGVyBmd5DEnHtvrt
        status: active
        display_name: 王纘
        merged_into_person_id: null
  children:
    - claim:
        id: c_GrqgOasmTFVQppJnVhzsFq
        subject_person_id: p_Wh324NyeqK1obvTfApNoR8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_F7AEiEU2jAU3jdAk1ZXndp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9gQ4MkmRSiwJlFOmW1-Dop
          claim_id: c_GrqgOasmTFVQppJnVhzsFq
          source_id: s_bxKGM5HBretcrNdDtBirBg
          stance: supports
          locator: CBDB 双向互证（父 王肇 ⇄ 子 王宗衡）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_bxKGM5HBretcrNdDtBirBg
            source_type: api_record
            title: 中国历代人物传记资料库：王宗衡（CBDB 23406）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23406&o=json
            external_identifier: CBDB:23406
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.880Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_F7AEiEU2jAU3jdAk1ZXndp
        status: active
        display_name: 王宗衡
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王肇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王肇 | accepted |
| bio.summary | 王肇，宋人物。籍贯南安，曾任州學博士。（中国历代人物传记资料库 CBDB 23405） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_aHeAmqcGVyBmd5DEnHtvrt | 王纘 | accepted |
| children | p_F7AEiEU2jAU3jdAk1ZXndp | 王宗衡 | accepted |

## 外部来源

- [中国历代人物传记资料库：王肇（CBDB 23405）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23405&o=json)
- [中国历代人物传记资料库：王宗衡（CBDB 23406）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23406&o=json)
- [中国历代人物传记资料库：王纘（CBDB 23404）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23404&o=json)

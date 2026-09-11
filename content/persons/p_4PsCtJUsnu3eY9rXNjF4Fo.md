---
schema: wang-person/v1
id: p_4PsCtJUsnu3eY9rXNjF4Fo
status: active
merged_into: null
display_name: 王廷相
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_K9ZsBAspGYU3DY1WQ9aGbq
        subject_person_id: p_4PsCtJUsnu3eY9rXNjF4Fo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷相
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UnshGP2pj3KfTv2kKyKpBy
          claim_id: c_K9ZsBAspGYU3DY1WQ9aGbq
          source_id: s_rMiKQdLixLiHHyQLAuXGgm
          stance: supports
          locator: CBDB:68246
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（68246）
          source: &a1
            id: s_rMiKQdLixLiHHyQLAuXGgm
            source_type: api_record
            title: 中国历代人物传记资料库：王廷相（CBDB 68246）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68246&o=json
            external_identifier: CBDB:68246
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.061Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_wsBGs2NaQoAheVQznGdsgL
        subject_person_id: p_4PsCtJUsnu3eY9rXNjF4Fo
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1474年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_86ZCVGL15Hex75Ygkj2sJ6
          claim_id: c_wsBGs2NaQoAheVQznGdsgL
          source_id: s_rMiKQdLixLiHHyQLAuXGgm
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
        id: c_AktAj2kMJKMrUfcrB4X45u
        subject_person_id: p_4PsCtJUsnu3eY9rXNjF4Fo
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1544年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4JJLovLVDAM5PFRzZLzPfZ
          claim_id: c_AktAj2kMJKMrUfcrB4X45u
          source_id: s_rMiKQdLixLiHHyQLAuXGgm
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
        id: c_T2ZKA3PnQq4vEsouF764Fb
        subject_person_id: p_4PsCtJUsnu3eY9rXNjF4Fo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Z4CSB3KGMpCVK2ccC2Yk6W
          claim_id: c_T2ZKA3PnQq4vEsouF764Fb
          source_id: s_rMiKQdLixLiHHyQLAuXGgm
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_RZ_Cs6Tou5eQ3ZJOJAaCC0
        subject_person_id: p_BDJG2REu9qNBRNY8nyCZ1f
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4PsCtJUsnu3eY9rXNjF4Fo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9aGWVQfMZaSseKbfAeeV8f
          claim_id: c_RZ_Cs6Tou5eQ3ZJOJAaCC0
          source_id: s_rMiKQdLixLiHHyQLAuXGgm
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第三甲第三十一名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_BDJG2REu9qNBRNY8nyCZ1f
        status: active
        display_name: 王增
        merged_into_person_id: null
  children:
    - claim:
        id: c_0SKlq_5kERfnbGGFh5PiKo
        subject_person_id: p_4PsCtJUsnu3eY9rXNjF4Fo
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WWv2n9EGLNMjLmMAodhMav
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dQ1Sm-Wf-91tdzkXBs2wTU
          claim_id: c_0SKlq_5kERfnbGGFh5PiKo
          source_id: s_rMiKQdLixLiHHyQLAuXGgm
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），11907：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_WWv2n9EGLNMjLmMAodhMav
        status: active
        display_name: 王旗
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_BOnHapSPW0nruEEws3Kjgu
        subject_person_id: p_4PsCtJUsnu3eY9rXNjF4Fo
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_nv6fz27s9bX9BToVnWd9my
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_J3qAofQCjlmPYSfQ7-tK9z
          claim_id: c_BOnHapSPW0nruEEws3Kjgu
          source_id: s_8kvJeFaR0NCN7JbWrXKvmj
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第三甲第三十一名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_8kvJeFaR0NCN7JbWrXKvmj
            source_type: api_record
            title: 中国历代人物传记资料库：劉氏(王廷相妻)（CBDB 271033）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271033&o=json
            external_identifier: CBDB:271033
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_nv6fz27s9bX9BToVnWd9my
        status: active
        display_name: 劉氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_YXeFGqL18PAD3N0eTYsX-r
        subject_person_id: p_5T63YxALgbHmj4Fr8Z5VTr
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_4PsCtJUsnu3eY9rXNjF4Fo
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yCtbKGGOv3oC25xq8MUqFV
          claim_id: c_YXeFGqL18PAD3N0eTYsX-r
          source_id: s_rMiKQdLixLiHHyQLAuXGgm
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第三甲第三十一名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_5T63YxALgbHmj4Fr8Z5VTr
        status: active
        display_name: 王思義
        merged_into_person_id: null
    - claim:
        id: c_CCqRI20U6onOCHFfwURUO7
        subject_person_id: p_1uAG6a8dvWnZ4NjPRnGsn6
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_4PsCtJUsnu3eY9rXNjF4Fo
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__vVTVtQEXO0ukjUToU4r1T
          claim_id: c_CCqRI20U6onOCHFfwURUO7
          source_id: s_rMiKQdLixLiHHyQLAuXGgm
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第三甲第三十一名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_1uAG6a8dvWnZ4NjPRnGsn6
        status: active
        display_name: 王實一
        merged_into_person_id: null
  descendants:
    - claim:
        id: c_hmmnaSCj0VlKkMXnzFqCi-
        subject_person_id: p_4PsCtJUsnu3eY9rXNjF4Fo
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_9BjemQ2sEPzfHjRymCew46
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ts4suh2qHTaSfDqkd6Toaz
          claim_id: c_hmmnaSCj0VlKkMXnzFqCi-
          source_id: s_rMiKQdLixLiHHyQLAuXGgm
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），11907：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_9BjemQ2sEPzfHjRymCew46
        status: active
        display_name: 王孝吉
        merged_into_person_id: null
    - claim:
        id: c_jAjzeKPcMPy3EJ1ffygz9T
        subject_person_id: p_4PsCtJUsnu3eY9rXNjF4Fo
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_sikdDrA9qpZkDB7aCMEixz
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gdeHjCyi9D1XVlv784e12A
          claim_id: c_jAjzeKPcMPy3EJ1ffygz9T
          source_id: s_rMiKQdLixLiHHyQLAuXGgm
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），11907：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_sikdDrA9qpZkDB7aCMEixz
        status: active
        display_name: 王孝逸
        merged_into_person_id: null
    - claim:
        id: c_ccQ14_8r6hpx64PocQmDDr
        subject_person_id: p_4PsCtJUsnu3eY9rXNjF4Fo
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2duCk7xQD14eza4i1QCDMa
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VQgFQNEj9s7CWMw8YCIroW
          claim_id: c_ccQ14_8r6hpx64PocQmDDr
          source_id: s_rMiKQdLixLiHHyQLAuXGgm
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），11907：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_2duCk7xQD14eza4i1QCDMa
        status: active
        display_name: 王徵吉
        merged_into_person_id: null
    - claim:
        id: c_ErT3nBhZ212bib3h4ctHqE
        subject_person_id: p_4PsCtJUsnu3eY9rXNjF4Fo
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_P82gW5LVfAmq8iJm9zG56P
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tAVmDWFV7maVp4jhMleU-X
          claim_id: c_ErT3nBhZ212bib3h4ctHqE
          source_id: s_rMiKQdLixLiHHyQLAuXGgm
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），11907：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_P82gW5LVfAmq8iJm9zG56P
        status: active
        display_name: 王徵逸
        merged_into_person_id: null
  other: []
---

# 王廷相

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷相 | accepted |
| birth.date | 1474年 | accepted |
| death.date | 1544年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_BDJG2REu9qNBRNY8nyCZ1f | 王增 | accepted |
| children | p_WWv2n9EGLNMjLmMAodhMav | 王旗 | accepted |
| spouses | p_nv6fz27s9bX9BToVnWd9my | 劉氏 | accepted |
| ancestors | p_5T63YxALgbHmj4Fr8Z5VTr | 王思義 | accepted |
| ancestors | p_1uAG6a8dvWnZ4NjPRnGsn6 | 王實一 | accepted |
| descendants | p_9BjemQ2sEPzfHjRymCew46 | 王孝吉 | accepted |
| descendants | p_sikdDrA9qpZkDB7aCMEixz | 王孝逸 | accepted |
| descendants | p_2duCk7xQD14eza4i1QCDMa | 王徵吉 | accepted |
| descendants | p_P82gW5LVfAmq8iJm9zG56P | 王徵逸 | accepted |

## 外部来源

- [中国历代人物传记资料库：劉氏(王廷相妻)（CBDB 271033）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271033&o=json)
- [中国历代人物传记资料库：王廷相（CBDB 68246）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68246&o=json)

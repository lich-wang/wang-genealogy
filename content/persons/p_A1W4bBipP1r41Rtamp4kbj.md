---
schema: wang-person/v1
id: p_A1W4bBipP1r41Rtamp4kbj
status: active
merged_into: null
display_name: 张奎
cbdb_id: 3150
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6XiZUZuXIJlDrsX1Oju92S
        subject_person_id: p_A1W4bBipP1r41Rtamp4kbj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 张奎，宋人物。CBDB 记录其籍贯记录为沙縣，曾任縣尉、尚書省刑部比部司郎中。中国历代人物传记资料库（CBDB）以人物编号 3150 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VaXwHlI4equ8q3do7JbGoe
          claim_id: c_6XiZUZuXIJlDrsX1Oju92S
          source_id: s_mNkLVyNDJx4mAhAtk3AmGF
          stance: supports
          locator: CBDB:3150
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_mNkLVyNDJx4mAhAtk3AmGF
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：張奎（3150）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3150&o=json
            external_identifier: CBDB:3150
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:10:04.913Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_dXfFNZ76rHjW53HDJQjZV3
        subject_person_id: p_A1W4bBipP1r41Rtamp4kbj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 张奎
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ftKbmWErfhrPsodDfe46ot
          claim_id: c_dXfFNZ76rHjW53HDJQjZV3
          source_id: s_Dx2K6Vti8q7zM4m92qEseA
          stance: supports
          locator: Q45360777
          quotation: null
          interpretation_note: null
          source:
            id: s_Dx2K6Vti8q7zM4m92qEseA
            source_type: api_record
            title: 维基数据：张奎（Q45360777）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45360777
            external_identifier: Q45360777
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:04.732Z
            metadata_json: null
        - id: cs_tDrqXeHx9MDRmJLPGVpT6a
          claim_id: c_dXfFNZ76rHjW53HDJQjZV3
          source_id: s_mNkLVyNDJx4mAhAtk3AmGF
          stance: supports
          locator: Q45360777
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_GA4yeiwUaPsLCZjMC26WJJ
        subject_person_id: p_A1W4bBipP1r41Rtamp4kbj
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_mxh2i1LUATcWHsMHstGBBk
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_ot7MRosPKeU3U5RP3CTDQN
          claim_id: c_GA4yeiwUaPsLCZjMC26WJJ
          source_id: s_MLiNBEUSDAocvAm7nBChTb
          stance: supports
          locator: 亲属关系：丈夫
          quotation: null
          interpretation_note: CBDB 注明此条来源：宋人傳記資料索引(電子版)
          source:
            id: s_MLiNBEUSDAocvAm7nBChTb
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王文淑（5011）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5011&o=json
            external_identifier: CBDB:5011
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:49:14.805Z
            metadata_json: null
        - id: cs_wxAnLnDqJJHwqfsf9ZsaTf
          claim_id: c_GA4yeiwUaPsLCZjMC26WJJ
          source_id: s_DefAXwimfmrVyoWhNZxYJu
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_DefAXwimfmrVyoWhNZxYJu
            source_type: api_record
            title: 维基数据：王文淑（Q45363736）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45363736
            external_identifier: Q45363736
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:14.674Z
            metadata_json: null
        - id: cs_NNGAXHG4nB8r8dBZJ94Kdb
          claim_id: c_GA4yeiwUaPsLCZjMC26WJJ
          source_id: s_Dx2K6Vti8q7zM4m92qEseA
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_Dx2K6Vti8q7zM4m92qEseA
            source_type: api_record
            title: 维基数据：张奎（Q45360777）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45360777
            external_identifier: Q45360777
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:04.732Z
            metadata_json: null
        - id: cs_1jxDKVgJbLptXf83wh4AsQ
          claim_id: c_GA4yeiwUaPsLCZjMC26WJJ
          source_id: s_mNkLVyNDJx4mAhAtk3AmGF
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：宋人傳記資料索引(電子版)
          source:
            id: s_mNkLVyNDJx4mAhAtk3AmGF
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：張奎（3150）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3150&o=json
            external_identifier: CBDB:3150
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:10:04.913Z
            metadata_json: null
      object_person:
        id: p_mxh2i1LUATcWHsMHstGBBk
        status: active
        display_name: 王文淑
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 张奎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 张奎，宋人物。CBDB 记录其籍贯记录为沙縣，曾任縣尉、尚書省刑部比部司郎中。中国历代人物传记资料库（CBDB）以人物编号 3150 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 张奎 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_mxh2i1LUATcWHsMHstGBBk | 王文淑 | accepted |

## 外部来源

- [维基数据：王文淑（Q45363736）](https://www.wikidata.org/wiki/Q45363736)
- [维基数据：张奎（Q45360777）](https://www.wikidata.org/wiki/Q45360777)
- [CBDB 中国历代人物传记资料库：王文淑（5011）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5011&o=json)
- [CBDB 中国历代人物传记资料库：張奎（3150）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3150&o=json)

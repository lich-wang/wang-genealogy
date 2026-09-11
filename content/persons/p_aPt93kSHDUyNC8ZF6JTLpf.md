---
schema: wang-person/v1
id: p_aPt93kSHDUyNC8ZF6JTLpf
status: active
merged_into: null
display_name: 陈安石
cbdb_id: 17
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wCefsf4q8VcpHH8FzkxcQV
        subject_person_id: p_aPt93kSHDUyNC8ZF6JTLpf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "陈安石，宋人物。CBDB 记录其籍贯记录为河陽，入仕记录为科舉: 進士(籠統)，曾任尚書省戶部侍郎、光祿寺丞。中国历代人物传记资料库（CBDB）以人物编号 17 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_3DO5Gx_Wb85vu0Z3YTUevA
          claim_id: c_wCefsf4q8VcpHH8FzkxcQV
          source_id: s_zHw44da223wjYSNZs8E9Rc
          stance: supports
          locator: CBDB:17
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_zHw44da223wjYSNZs8E9Rc
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：陳安石（17）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17&o=json
            external_identifier: CBDB:17
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:07:09.918Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_KG5jkREWzhEGveSTKVWki9
        subject_person_id: p_aPt93kSHDUyNC8ZF6JTLpf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 陈安石
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_3sWmxK3tDLFZyM4vPy83M9
          claim_id: c_KG5jkREWzhEGveSTKVWki9
          source_id: s_zHw44da223wjYSNZs8E9Rc
          stance: supports
          locator: Q45354659
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_che9dSbcWgYLys4PM8uWU7
          claim_id: c_KG5jkREWzhEGveSTKVWki9
          source_id: s_uT7rQc9RE3KNJYZUmJEYXj
          stance: supports
          locator: Q45354659
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_uT7rQc9RE3KNJYZUmJEYXj
            source_type: api_record
            title: 维基数据：陈安石（Q45354659）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45354659
            external_identifier: Q45354659
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:09.724Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E9%99%B3%E5%AE%89%E7%9F%B3
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_LFuEGw4N76WNPe877DcMdf
        subject_person_id: p_2SPbMq35G8ocJgxHXsAm94
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_aPt93kSHDUyNC8ZF6JTLpf
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VznNhNftb8GA3GdAusTs7m
          claim_id: c_LFuEGw4N76WNPe877DcMdf
          source_id: s_TFt1iKpr1WP5SnuqPvEY9j
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_TFt1iKpr1WP5SnuqPvEY9j
            source_type: api_record
            title: 维基数据：王氏（Q45364876）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45364876
            external_identifier: Q45364876
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:17.572Z
            metadata_json: null
        - id: cs_nAZ67V77oY4g2Gi6iJ2EPx
          claim_id: c_LFuEGw4N76WNPe877DcMdf
          source_id: s_uT7rQc9RE3KNJYZUmJEYXj
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_xcrExGu21KGaAu9ojufiS7
          claim_id: c_LFuEGw4N76WNPe877DcMdf
          source_id: s_PuAJWu4MNmrZ2JcmfKcT3W
          stance: supports
          locator: 亲属关系：丈夫
          quotation: null
          interpretation_note: CBDB 注明此条来源：宋人傳記資料索引(電子版)
          source:
            id: s_PuAJWu4MNmrZ2JcmfKcT3W
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王氏（5380）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5380&o=json
            external_identifier: CBDB:5380
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:17.755Z
            metadata_json: null
      object_person:
        id: p_2SPbMq35G8ocJgxHXsAm94
        status: active
        display_name: 王氏
        merged_into_person_id: null
    - claim:
        id: c_SVr0rVxgWZVBdAoQXp5Fnu
        subject_person_id: p_aPt93kSHDUyNC8ZF6JTLpf
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_2SPbMq35G8ocJgxHXsAm94
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_b45oaKGIxG74uVr-BcPNEW
          claim_id: c_SVr0rVxgWZVBdAoQXp5Fnu
          source_id: s_zHw44da223wjYSNZs8E9Rc
          stance: supports
          locator: 宋人傳記資料索引(電子版)，14235;14236：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_2SPbMq35G8ocJgxHXsAm94
        status: active
        display_name: 王氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 陈安石

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 陈安石，宋人物。CBDB 记录其籍贯记录为河陽，入仕记录为科舉: 進士(籠統)，曾任尚書省戶部侍郎、光祿寺丞。中国历代人物传记资料库（CBDB）以人物编号 17 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 陈安石 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_2SPbMq35G8ocJgxHXsAm94 | 王氏 | accepted |
| spouses | p_2SPbMq35G8ocJgxHXsAm94 | 王氏 | accepted |

## 外部来源

- [维基数据：陈安石（Q45354659）](https://www.wikidata.org/wiki/Q45354659)
- [维基数据：王氏（Q45364876）](https://www.wikidata.org/wiki/Q45364876)
- [CBDB 中国历代人物传记资料库：陳安石（17）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17&o=json)
- [CBDB 中国历代人物传记资料库：王氏（5380）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5380&o=json)

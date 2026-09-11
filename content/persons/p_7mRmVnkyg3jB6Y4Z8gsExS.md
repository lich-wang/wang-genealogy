---
schema: wang-person/v1
id: p_7mRmVnkyg3jB6Y4Z8gsExS
status: active
merged_into: null
display_name: 王五娘
cbdb_id: 167694
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_o2ZkTGVEPPGy9ExPK7yQ8q
        subject_person_id: p_7mRmVnkyg3jB6Y4Z8gsExS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王五娘，唐人物。中国历代人物传记资料库（CBDB）以人物编号 167694 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_UDEMGKRH5tYF1dCIN0Lygh
          claim_id: c_o2ZkTGVEPPGy9ExPK7yQ8q
          source_id: s_jDPM8xhpQCQ58iPbr86LK9
          stance: supports
          locator: CBDB:167694
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_jDPM8xhpQCQ58iPbr86LK9
            source_type: api_record
            title: 中国历代人物传记资料库：王五娘（CBDB 167694）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=167694&o=json
            external_identifier: CBDB:167694
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.741Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_qG7w4GwreseH6PC3R5gHFD
        subject_person_id: p_7mRmVnkyg3jB6Y4Z8gsExS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王五娘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Xh51NwZkPZAsTgV3vmt2o5
          claim_id: c_qG7w4GwreseH6PC3R5gHFD
          source_id: s_jDPM8xhpQCQ58iPbr86LK9
          stance: supports
          locator: CBDB:167694
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2301-2400）｜历史性依据：CBDB 朝代 = 唐
          source:
            id: s_jDPM8xhpQCQ58iPbr86LK9
            source_type: api_record
            title: 中国历代人物传记资料库：王五娘（CBDB 167694）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=167694&o=json
            external_identifier: CBDB:167694
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.741Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Rl5LBOvf5ALBdjEJmwnzL0
        subject_person_id: p_yw8Ldi3TsRvFBDPd73FPjN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7mRmVnkyg3jB6Y4Z8gsExS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RkAlHkS7pZi7VC-XQP8Ldy
          claim_id: c_Rl5LBOvf5ALBdjEJmwnzL0
          source_id: s_jDPM8xhpQCQ58iPbr86LK9
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Dazhong75：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_yw8Ldi3TsRvFBDPd73FPjN
        status: active
        display_name: 王玉
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王五娘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王五娘，唐人物。中国历代人物传记资料库（CBDB）以人物编号 167694 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王五娘 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_yw8Ldi3TsRvFBDPd73FPjN | 王玉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王五娘（CBDB 167694）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=167694&o=json)

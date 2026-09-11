---
schema: wang-person/v1
id: p_7Ar5PzC26XbEgUcnAsMSDe
status: active
merged_into: null
display_name: 王廷傑
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7fgKLBVDNm5cBbkYHhcf43
        subject_person_id: p_7Ar5PzC26XbEgUcnAsMSDe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷傑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_z2AVFdMX83kG4MQEYm6WxL
          claim_id: c_7fgKLBVDNm5cBbkYHhcf43
          source_id: s_Cj7m495sNc4oJbqopqAB9f
          stance: supports
          locator: CBDB:692033
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（692033）
          source: &a1
            id: s_Cj7m495sNc4oJbqopqAB9f
            source_type: api_record
            title: 中国历代人物传记资料库：王廷傑（CBDB 692033）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=692033&o=json
            external_identifier: CBDB:692033
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.628Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XNEZ75D3dbSu4N62dZp28F
        subject_person_id: p_7Ar5PzC26XbEgUcnAsMSDe
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷傑，明人物。籍贯海鹽，入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任副指揮、鹽運司經歷。（中国历代人物传记资料库 CBDB 692033）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-g5SrfeexLs3-2OL-VErjT
          claim_id: c_XNEZ75D3dbSu4N62dZp28F
          source_id: s_Cj7m495sNc4oJbqopqAB9f
          stance: supports
          locator: CBDB:692033
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ES5BQ6i9ig3ZMB1AGDfeql
        subject_person_id: p_cpGBEq63QojtvoRHpvNFEb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7Ar5PzC26XbEgUcnAsMSDe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6juU30jzWlE1-IGAKEm6rt
          claim_id: c_ES5BQ6i9ig3ZMB1AGDfeql
          source_id: s_Cj7m495sNc4oJbqopqAB9f
          stance: supports
          locator: "海鹽縣志: 二十二卷(光緒)，lgid=293849：父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_cpGBEq63QojtvoRHpvNFEb
        status: active
        display_name: 王家相
        merged_into_person_id: null
  children:
    - claim:
        id: c_gQVMHr6Bx0lANjc3HF3u94
        subject_person_id: p_7Ar5PzC26XbEgUcnAsMSDe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CL9yKhz8KQ9TFTGGVXiGwR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DKH4_XPGTMxsrf7PiC6nhq
          claim_id: c_gQVMHr6Bx0lANjc3HF3u94
          source_id: s_Cj7m495sNc4oJbqopqAB9f
          stance: supports
          locator: "海鹽縣志: 二十二卷(光緒)，lgid=293849：子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_CL9yKhz8KQ9TFTGGVXiGwR
        status: active
        display_name: 王大任
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王廷傑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷傑 | accepted |
| bio.summary | 王廷傑，明人物。籍贯海鹽，入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任副指揮、鹽運司經歷。（中国历代人物传记资料库 CBDB 692033） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_cpGBEq63QojtvoRHpvNFEb | 王家相 | accepted |
| children | p_CL9yKhz8KQ9TFTGGVXiGwR | 王大任 | accepted |

## 外部来源

- [中国历代人物传记资料库：王廷傑（CBDB 692033）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=692033&o=json)

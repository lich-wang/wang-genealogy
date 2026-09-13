---
schema: wang-person/v1
id: p_dzQsozLMz4kdNcHPqJVsZP
status: active
merged_into: null
display_name: 王旦
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8HpPoLzur5nUXWvwF_Gp0t
        subject_person_id: p_dzQsozLMz4kdNcHPqJVsZP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王旦（957年—1017年10月3日），因生于凌晨，取名旦，字子明，大名府莘县人，北宋政治人物。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vNM5G4oY1EyShfWppcAwH0
          claim_id: c_8HpPoLzur5nUXWvwF_Gp0t
          source_id: s_FMabuxe1fCK9qw1W9aE8oZ
          stance: supports
          locator: 导言
          quotation: 王旦（957年—1017年10月3日），因生于凌晨，取名旦，字子
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source: &a1
            id: s_FMabuxe1fCK9qw1W9aE8oZ
            source_type: website
            title: 中文维基百科：王旦
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%97%A6
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:10.137Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_rt8gfKdh75fU2fsLBVSCPP
        subject_person_id: p_dzQsozLMz4kdNcHPqJVsZP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王旦
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Hc6DqH5KwLUg6RPqAmjBV5
          claim_id: c_rt8gfKdh75fU2fsLBVSCPP
          source_id: s_FMabuxe1fCK9qw1W9aE8oZ
          stance: supports
          locator: Q15912341
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_dnB5ajBXK0DxJPJQrsttDw
        subject_person_id: p_wEqsogkdLBrdte1KEpUFVQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dzQsozLMz4kdNcHPqJVsZP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__CADAwv7JNuzubW2Bm4TkK
          claim_id: c_dnB5ajBXK0DxJPJQrsttDw
          source_id: s_8i3-E7MR7jbmL6AbT6bnXS
          stance: supports
          locator: 宋史·卷二百八十二·王旦：父祐，尚書兵部侍郎。
          quotation: null
          interpretation_note: 依据《宋史·王旦传》正史原文复核补充。
          source:
            id: s_8i3-E7MR7jbmL6AbT6bnXS
            source_type: website
            title: 维基文库：宋史·卷二百八十二·王旦
            creator: 维基文库贡献者
            publisher: 维基媒体基金会
            published_at_text: null
            canonical_url: https://zh.wikisource.org/wiki/宋史/卷282
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-13T11:29:13.490Z
            metadata_json: null
      object_person:
        id: p_wEqsogkdLBrdte1KEpUFVQ
        status: active
        display_name: 王祐
        merged_into_person_id: null
  children:
    - claim:
        id: c_PoCtsqs2iBLB7uF65ixZhX
        subject_person_id: p_dzQsozLMz4kdNcHPqJVsZP
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_WE1MjHX5dTWFtBPANaJMmP
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NW8E6kN3QapDzxRFZmCibx
          claim_id: c_PoCtsqs2iBLB7uF65ixZhX
          source_id: s_FMabuxe1fCK9qw1W9aE8oZ
          stance: supports
          locator: 条文：条文识读（长子）
          quotation: 是年，王旦长子出生。为纪念太宗改元"雍熙"，取名王雍。
          interpretation_note: null
          source:
            id: s_FMabuxe1fCK9qw1W9aE8oZ
            source_type: website
            title: 中文维基百科：王旦
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%97%A6
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:10.137Z
            metadata_json: null
      object_person:
        id: p_WE1MjHX5dTWFtBPANaJMmP
        status: active
        display_name: 王雍
        merged_into_person_id: null
    - claim:
        id: c_L5otmnNuQUD48qTE92VWUK
        subject_person_id: p_dzQsozLMz4kdNcHPqJVsZP
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_VX8j1TBEJ9LitV97mrstMS
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cT7E7DsKti2D7bvcGBYF7z
          claim_id: c_L5otmnNuQUD48qTE92VWUK
          source_id: s_H58mJSb7fWQ4noNozHrHCy
          stance: supports
          locator: 条文：条文识读（第三子）
          quotation: 北宋医家，王旦第三子。
          interpretation_note: null
          source:
            id: s_H58mJSb7fWQ4noNozHrHCy
            source_type: website
            title: 中文维基百科：王素 (北宋)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%B4%A0_(%E5%8C%97%E5%AE%8B)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:56:55.269Z
            metadata_json: null
        - id: cs_g7xefHdCZoguh5KvS2DCQH
          claim_id: c_L5otmnNuQUD48qTE92VWUK
          source_id: s_UehQ3kMuM6qnhEDvTJyrfT
          stance: supports
          locator: 王素条
          quotation: 王素，字仲儀，太尉旦季子也。
          interpretation_note: 选用已有北宋人物条目；另一同名王素尚含王志父边，暂不自动合并。
          source:
            id: s_UehQ3kMuM6qnhEDvTJyrfT
            source_type: book
            title: 中文维基文库：《宋史》卷三百二十
            creator: null
            publisher: 维基文库
            published_at_text: null
            canonical_url: https://zh.wikisource.org/zh-hant/%E5%AE%8B%E5%8F%B2/%E5%8D%B7320
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-01T02:15:18.314Z
            metadata_json: null
      object_person:
        id: p_VX8j1TBEJ9LitV97mrstMS
        status: active
        display_name: 王素
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_TXrUrgxP7RYlGnyne5ZmmV
        subject_person_id: p_aeQuz9T27oQ8FHTk36tCX7
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_dzQsozLMz4kdNcHPqJVsZP
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9wI1KHW4GaSYYjoRI1-VZ6
          claim_id: c_TXrUrgxP7RYlGnyne5ZmmV
          source_id: s_3bzL7xxo5wfo9JJxb3hVnV
          stance: supports
          locator: 宋史：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_3bzL7xxo5wfo9JJxb3hVnV
            source_type: api_record
            title: 中国历代人物传记资料库：王徹（CBDB 37837）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37837&o=json
            external_identifier: CBDB:37837
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.268Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_aeQuz9T27oQ8FHTk36tCX7
        status: active
        display_name: 王徹
        merged_into_person_id: null
    - claim:
        id: c_06XTxGZADEIYx3xipToNuJ
        subject_person_id: p_GNHXsNxDAH8x9cA2NzPigP
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_dzQsozLMz4kdNcHPqJVsZP
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ciT7FA1gvBsTGTXrQVaOu4
          claim_id: c_06XTxGZADEIYx3xipToNuJ
          source_id: s_GLF3W15r49867jAKaPcYZP
          stance: supports
          locator: 宋史：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_GLF3W15r49867jAKaPcYZP
            source_type: api_record
            title: 中国历代人物传记资料库：王言（CBDB 17837）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17837&o=json
            external_identifier: CBDB:17837
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.683Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_GNHXsNxDAH8x9cA2NzPigP
        status: active
        display_name: 王言
        merged_into_person_id: null
  descendants:
    - claim:
        id: c_s1BE32AvFXZLbCxhDUzKgB
        subject_person_id: p_dzQsozLMz4kdNcHPqJVsZP
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_XJ584hRRgmwC1emz21vE1F
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SDScHXX7kHq9pjfo1myKSn
          claim_id: c_s1BE32AvFXZLbCxhDUzKgB
          source_id: s_2aDX9AG3TA29xxT3gf2JMk
          stance: supports
          locator: 条文：条文识读（孫）（2世）
          quotation: 宰相王旦之孫，工部尚書王素第四子。
          interpretation_note: null
          source:
            id: s_2aDX9AG3TA29xxT3gf2JMk
            source_type: website
            title: 中文维基百科：王鞏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%9E%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:06.835Z
            metadata_json: null
      object_person:
        id: p_XJ584hRRgmwC1emz21vE1F
        status: active
        display_name: 王鞏
        merged_into_person_id: null
    - claim:
        id: c_Caz8eFh3I6XjKgWHQ8lBg9
        subject_person_id: p_dzQsozLMz4kdNcHPqJVsZP
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_4RuP1y13HperNdMDJkN6MF
        generation_count: 4
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UlvXNlbtTpPRyShSqLijje
          claim_id: c_Caz8eFh3I6XjKgWHQ8lBg9
          source_id: s_ryXjfBob4D77XXAGUgL5gi
          stance: supports
          locator: 宋人傳記資料索引(電子版)：高祖;四世祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ryXjfBob4D77XXAGUgL5gi
            source_type: api_record
            title: 中国历代人物传记资料库：王震（CBDB 3947）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3947&o=json
            external_identifier: CBDB:3947
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.425Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4RuP1y13HperNdMDJkN6MF
        status: active
        display_name: 王震
        merged_into_person_id: null
    - claim:
        id: c_t8anNLd0vlVjDGjGZnA9y6
        subject_person_id: p_dzQsozLMz4kdNcHPqJVsZP
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_TM1Cuq1eEZmtPXBv2xPrq5
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0TZV_OVxi8s01jVfFiZ7Gl
          claim_id: c_t8anNLd0vlVjDGjGZnA9y6
          source_id: s_5xz8dMhtr743npVHmN1U7m
          stance: supports
          locator: 宋人傳記資料索引(電子版)，592;593：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5xz8dMhtr743npVHmN1U7m
            source_type: api_record
            title: 中国历代人物传记资料库：王奧（CBDB 38645）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38645&o=json
            external_identifier: CBDB:38645
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.522Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_TM1Cuq1eEZmtPXBv2xPrq5
        status: active
        display_name: 王奧
        merged_into_person_id: null
  other: []
---

# 王旦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王旦（957年—1017年10月3日），因生于凌晨，取名旦，字子明，大名府莘县人，北宋政治人物。 | accepted |
| name.primary | 王旦 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_wEqsogkdLBrdte1KEpUFVQ | 王祐 | accepted |
| children | p_WE1MjHX5dTWFtBPANaJMmP | 王雍 | accepted |
| children | p_VX8j1TBEJ9LitV97mrstMS | 王素 | accepted |
| ancestors | p_aeQuz9T27oQ8FHTk36tCX7 | 王徹 | accepted |
| ancestors | p_GNHXsNxDAH8x9cA2NzPigP | 王言 | accepted |
| descendants | p_XJ584hRRgmwC1emz21vE1F | 王鞏 | accepted |
| descendants | p_4RuP1y13HperNdMDJkN6MF | 王震 | accepted |
| descendants | p_TM1Cuq1eEZmtPXBv2xPrq5 | 王奧 | accepted |

## 外部来源

- [维基文库：宋史·卷二百八十二·王旦](https://zh.wikisource.org/wiki/宋史/卷282)
- [中国历代人物传记资料库：王奧（CBDB 38645）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38645&o=json)
- [中国历代人物传记资料库：王徹（CBDB 37837）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37837&o=json)
- [中国历代人物传记资料库：王言（CBDB 17837）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17837&o=json)
- [中国历代人物传记资料库：王震（CBDB 3947）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3947&o=json)
- [中文维基百科：王旦](https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%97%A6)
- [中文维基百科：王鞏](https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%9E%8F)
- [中文维基百科：王素 (北宋)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%B4%A0_(%E5%8C%97%E5%AE%8B))
- [中文维基文库：《宋史》卷三百二十](https://zh.wikisource.org/zh-hant/%E5%AE%8B%E5%8F%B2/%E5%8D%B7320)
